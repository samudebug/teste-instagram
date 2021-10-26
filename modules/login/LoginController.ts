import { NextFunction, Request, Response } from "express";
import { LoginService } from "./LoginService";

export class LoginController {
    constructor(private readonly loginService:LoginService) {
        this.handle = this.handle.bind(this);
    }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const loginUrl = await this.loginService.execute();
            return res.json({loginUrl});

        } catch (error) {
            return next()
        }
    }
}