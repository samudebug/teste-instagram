import { LoginController } from "./LoginController";
import { LoginService } from "./LoginService";

const loginService = new LoginService();
const loginController = new LoginController(loginService);

export {loginService, loginController};
