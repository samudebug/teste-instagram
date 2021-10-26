import { InstagramProvider } from "../../providers/implementations/InstagramProvider";
import { SelectPageController } from "./selectPageController";
import { SelectPageService } from "./selectPageService";

const instaProvider = new InstagramProvider();
const selectPageService = new SelectPageService(instaProvider);
const selectPageController = new SelectPageController(selectPageService);

export {selectPageService, selectPageController};