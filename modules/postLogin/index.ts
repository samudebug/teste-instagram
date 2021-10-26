import { PostLoginController } from "./PostLoginController";
import { PostLoginService } from "./PostLoginService";

const postLoginService = new PostLoginService();
const postLoginController = new PostLoginController(postLoginService);

export {postLoginService, postLoginController}