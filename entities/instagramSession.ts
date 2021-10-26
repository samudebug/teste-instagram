export class InstagramSession {
    token: string;
    access_token: string;
    page_access_token?: string;
    selected_page?: string;

    constructor(token: string, access_token: string) {
        this.token = token;
        this.access_token = access_token;
    }
}