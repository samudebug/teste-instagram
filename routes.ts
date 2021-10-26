import { Router } from 'express';
import { listConversationsController } from './modules/listConversations';
import { listMessagesController } from './modules/listMessages';
import { listPageController } from './modules/listPages';
import { loginController } from './modules/login';
import { postLoginController } from './modules/postLogin'
import { selectPageController } from './modules/selectPage';
import { sendMessageController } from './modules/sendMessage';
const routes = Router();

routes.get('/login', loginController.handle);
routes.get('/post-login', postLoginController.handle);
routes.get('/list-pages', listPageController.handle);
routes.put('/select-page', selectPageController.handle);
routes.get('/conversations', listConversationsController.handle);
routes.get('/messages', listMessagesController.handle);
routes.post('/messages', sendMessageController.handle);

export default routes;