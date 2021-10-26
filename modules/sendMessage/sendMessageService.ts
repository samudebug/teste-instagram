import { ConversationMessage } from "../../entities/conversation";
import { InstagramProvider } from "../../providers/implementations/InstagramProvider";
import { SendMessageDTO } from "./sendMessageDto";

export class SendMessageService {
    constructor(private readonly instaProvider: InstagramProvider) {}

    async execute(token: string, message: SendMessageDTO): Promise<ConversationMessage> {
        return await this.instaProvider.sendMessage(message, token);
    }
}