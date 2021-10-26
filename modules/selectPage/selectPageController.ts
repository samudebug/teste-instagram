import { NextFunction, Request, Response } from "express";
import { SelectPageService } from "./selectPageService";

export class SelectPageController {
    constructor(private readonly selectPageService: SelectPageService) {
        this.handle = this.handle.bind(this);
    }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const token = req.query.token as string;
            const pageId = req.body.page_id as string;
            await this.selectPageService.execute(token, pageId);
            res.json({message: "Pagina selecionada"});
        } catch (error) {
            
            next(error);
        }
    }
}