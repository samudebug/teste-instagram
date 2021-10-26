import { PostLoginService } from "./PostLoginService";
import { Request, Response, NextFunction } from 'express';
import { InstagramProvider } from "../../providers/implementations/InstagramProvider";
import { InstagramSession } from "../../entities/instagramSession";

export class PostLoginController {
    constructor(private readonly postLoginService: PostLoginService) {
        this.handle = this.handle.bind(this);
    }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            console.log(req.query);
            const access_token = await this.postLoginService.execute(req.query.code as string);
            const session = new InstagramSession("a", access_token);
            InstagramProvider.instagramSessions.push(session)
            return res.json({message: "Login com sucesso"});
        } catch(error) {
            next(error);
        }
    }
}