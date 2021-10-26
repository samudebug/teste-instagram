import { NextFunction, Request, Response } from "express";
import { ListMessagesService } from "./listMessagesService";

export class ListMessagesController {
    constructor(private readonly listMessageService: ListMessagesService) {
        this.handle = this.handle.bind(this);
    }
    async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const token = req.query.token as string;
            const conversation_id = req.query.conversation_id as string;
            return res.json(await this.listMessageService.execute(token, conversation_id));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
}