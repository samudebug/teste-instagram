import { InstagramProvider } from "../../providers/implementations/InstagramProvider";

export class SelectPageService {
    constructor(private readonly instaProvider: InstagramProvider) {}

    async execute(token: string, page_id: string): Promise<void> {
        await this.instaProvider.setSelectedPage(token, page_id);
    }
}