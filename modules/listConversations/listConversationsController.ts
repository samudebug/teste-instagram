import { NextFunction, Request, Response } from "express";
import { ListConversationsService } from "./listConversationsService";

export class ListConversationsController {
    constructor(private readonly listConversationService: ListConversationsService) {
        this.handle = this.handle.bind(this);
    }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            return res.json(await this.listConversationService.execute(req.query.token as string));
        }catch(error) {
            next(error);
        }
    }
}