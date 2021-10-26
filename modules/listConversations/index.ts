import { InstagramProvider } from "../../providers/implementations/InstagramProvider";
import { ListConversationsController } from "./listConversationsController";
import { ListConversationsService } from "./listConversationsService";

const instaProvider = new InstagramProvider();
const listConversationService = new ListConversationsService(instaProvider);
const listConversationsController = new ListConversationsController(listConversationService);

export {listConversationService, listConversationsController};