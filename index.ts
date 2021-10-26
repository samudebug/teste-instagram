import express, {Express} from 'express'
import routes from './routes';
import dotenv from 'dotenv';
dotenv.config();
const app: Express = express();
app.use(express.json());
function router() {
    app.use(routes);
}
function bootstrap(): void {
    
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log("Aplicativo rodando em", port);
    })
}
router();
bootstrap();