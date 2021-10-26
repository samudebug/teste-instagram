import { Conversation, ConversationMessage } from "../entities/conversation";
import { FBPage } from "../entities/page";
import { SendMessageDTO } from "../modules/sendMessage/sendMessageDto";

export interface IInstagramProvider {
    listPages(token: string): Promise<FBPage[]>;
    listConversations(token: string): Promise<Conversation[]>;
    listMessages(token: string, conversationId: string): Promise<ConversationMessage[]>;
    sendMessage(conversationMessage: SendMessageDTO, token: string): Promise<ConversationMessage>;
    setSelectedPage(token: string, pageId: string): Promise<void>;
}