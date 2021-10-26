import { ConversationMessage } from "../../entities/conversation";
import { InstagramProvider } from "../../providers/implementations/InstagramProvider";

export class ListMessagesService {
    constructor(private readonly instaProvider: InstagramProvider) {}

    async execute(token: string, conversationId: string): Promise<ConversationMessage[]> {
        return await this.instaProvider.listMessages(token, conversationId);
    }
}