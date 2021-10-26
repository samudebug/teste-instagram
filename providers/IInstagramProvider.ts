import { Conversation, ConversationMessage } from "../entities/conversation";
import { FBPage } from "../entities/page";

export interface IInstagramProvider {
    listPages(token: string): Promise<FBPage[]>;
    listConversations(token: string): Promise<Conversation[]>;
    listMessages(token: string, conversationId: string): Promise<ConversationMessage[]>;
    sendMessage(conversationMessage: string, token: string, receiver: string): Promise<ConversationMessage>;
    setSelectedPage(token: string, pageId: string): Promise<void>;
}