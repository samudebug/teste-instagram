import { FBPage } from "../../entities/page";
import { InstagramProvider } from "../../providers/implementations/InstagramProvider";

export class ListPagesService {
    constructor(private readonly instaProvider: InstagramProvider) {}

    async execute(token: string): Promise<FBPage[]> {
        return await this.instaProvider.listPages(token);
    }
}