import { InstagramProvider } from "../../providers/implementations/InstagramProvider";
import { SendMessageController } from "./sendMessageController";
import { SendMessageService } from "./sendMessageService";

const instaProvider = new InstagramProvider();
const sendMessageService = new SendMessageService(instaProvider);
const sendMessageController = new SendMessageController(sendMessageService);

export {sendMessageService, sendMessageController};