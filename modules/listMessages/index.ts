import { InstagramProvider } from "../../providers/implementations/InstagramProvider";
import { ListMessagesController } from "./listMessagesController";
import { ListMessagesService } from "./listMessagesService";

const instaProvider = new InstagramProvider();
const listMessagesService = new ListMessagesService(instaProvider);
const listMessagesController = new ListMessagesController(listMessagesService);

export {listMessagesService, listMessagesController};