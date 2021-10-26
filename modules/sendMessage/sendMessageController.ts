import { NextFunction, Request, Response } from "express";
import { SendMessageDTO } from "./sendMessageDto";
import { SendMessageService } from "./sendMessageService";

export class SendMessageController {
    constructor(private readonly sendMessageService: SendMessageService) {
        this.handle = this.handle.bind(this);
    }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const token = req.query.token as string;
            const message = req.body as SendMessageDTO;
            return res.json(await this.sendMessageService.execute(token, message));
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}