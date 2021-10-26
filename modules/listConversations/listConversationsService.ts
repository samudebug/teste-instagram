import { Conversation } from "../../entities/conversation";
import { InstagramProvider } from "../../providers/implementations/InstagramProvider";

export class ListConversationsService {
    constructor (private readonly instaProvider: InstagramProvider) {}

    async execute(token: string): Promise<Conversation[]> {
        return await this.instaProvider.listConversations(token);
    }
}