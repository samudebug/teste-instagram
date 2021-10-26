import { Conversation, ConversationMessage } from "../../entities/conversation";
import { InstagramSession } from "../../entities/instagramSession";
import { IInstagramProvider } from "../IInstagramProvider";
import axios from 'axios';
import { FBPage } from "../../entities/page";
import { SendMessageDTO } from "../../modules/sendMessage/sendMessageDto";
interface IConversationResponse {
    data: Array<{ id: string }>
}
export class InstagramProvider implements IInstagramProvider {


    static instagramSessions: InstagramSession[] = [];
    async listConversations(token: string): Promise<Conversation[]> {
        const session = this.getSessionByToken(token);
        const conversationResponse: IConversationResponse = (await axios.get(`https://graph.facebook.com/v9.0/${session?.selected_page}/conversations`, { params: { platform: "instagram", access_token: session?.page_access_token } })).data as IConversationResponse;
        const conversations: Conversation[] = await Promise.all(conversationResponse.data.map(async (x) => {
            const threadResponse = (await axios.get(`https://graph.facebook.com/v9.0/${x.id}`, { params: { fields: ['participants', 'messages'].join(','), access_token: session?.page_access_token } }))
            console.log(threadResponse.data);
            return threadResponse.data as Conversation;
        }));
        console.log(conversations)
        return conversations;

    }
    async listMessages(token: string, conversationId: string): Promise<ConversationMessage[]> {
        const session = this.getSessionByToken(token);
        console.log(session);
        const conversationResponse = (await axios.get(`https://graph.facebook.com/v9.0/${conversationId}`, { params: { fields: ['messages'].join(','), access_token: session?.page_access_token } }));
        console.log(conversationResponse.data);
        const conversation: { messages: {data: Array<{ id: string, created_time: string }>} } = conversationResponse.data as { messages: {data: Array<{ id: string, created_time: string }>} };
        const messages: ConversationMessage[] = await Promise.all(conversation.messages.data.map(async (x) => {
            return this.getMessageInfo(session!, x.id);
        }))
        console.log(messages);
        return messages;


    }
    async sendMessage(conversationMessage: SendMessageDTO, token: string): Promise<ConversationMessage> {
        const session = this.getSessionByToken(token);
        console.log(session);
        const sendResponse = await axios.post("https://graph.facebook.com/v12.0/me/messages", conversationMessage, {params: {access_token: session?.page_access_token}});
        const responseData: {recipient_id: string, message_id: string} = sendResponse.data as {recipient_id: string, message_id: string};
        return this.getMessageInfo(session!, responseData.message_id);

    }

    getSessionByToken(token: string): InstagramSession | undefined {
        return InstagramProvider.instagramSessions.find((x) => x.token == token);
    }
    async setSelectedPage(token: string, pageId: string): Promise<void> {
        const sessionIndex = InstagramProvider.instagramSessions.findIndex(x => x.token == token);
        InstagramProvider.instagramSessions[sessionIndex].selected_page = pageId;
        const session = InstagramProvider.instagramSessions[sessionIndex];
        const token_data: { access_token: string, id: string } = (await axios.get(`https://graph.facebook.com/${pageId}`, { params: { fields: ['access_token'].join(','), access_token: session.access_token } })).data as { access_token: string, id: string };
        InstagramProvider.instagramSessions[sessionIndex].page_access_token = token_data.access_token;

    }

    async listPages(token: string): Promise<FBPage[]> {
        const session = this.getSessionByToken(token);
        const pageData: { data: FBPage[] } = (await axios.get("https://graph.facebook.com/v9.0/me/accounts", { params: { access_token: session?.access_token } })).data as { data: FBPage[] }
        return pageData.data;
    }

    async getMessageInfo(session: InstagramSession, messageId: string): Promise<ConversationMessage> {
        const messagesResponse = (await axios.get(`https://graph.facebook.com/v9.0/${messageId}`, { params: { fields: ['id', 'created_time', 'from', 'message', 'to', 'attachments'].join(','),access_token: session?.page_access_token } }));
        return messagesResponse.data as ConversationMessage;
    }

}