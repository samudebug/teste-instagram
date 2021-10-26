import { NextFunction, Request, Response } from "express";
import { ListPagesService } from "./listPageService";
export class ListPagesController {
    constructor(private readonly listPageService: ListPagesService) {
        this.handle = this.handle.bind(this);
    }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            return res.json(await this.listPageService.execute(req.query.token as string));
        } catch(error) {
            next(error);
        }
    }
}