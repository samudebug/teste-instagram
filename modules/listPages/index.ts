import { InstagramProvider } from "../../providers/implementations/InstagramProvider";
import { ListPagesController } from "./listPagesController";
import { ListPagesService } from "./listPageService";

const instaProvider = new InstagramProvider();
const listPageService = new ListPagesService(instaProvider);
const listPageController = new ListPagesController(listPageService);

export {listPageService, listPageController};