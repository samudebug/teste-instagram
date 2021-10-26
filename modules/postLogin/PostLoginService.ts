import axios from 'axios';
interface FBToken {
    code: string;
    access_token: string;
    token_type: string;
    expires_in: number;
    auth_type: string;
}
interface FBPage {
    access_token: string;
    category?: string;
    category_list?: Array<string>
    name?: string;
    id: string;
    tasks?: Array<string>
}
interface FBPages {
    data: Array<FBPage>
}
export class PostLoginService {
    async execute(code: string): Promise<string> {
        const responseToken = await axios.get('https://graph.facebook.com/v4.0/oauth/access_token', {params: {
            client_id: process.env.APP_ID,
            client_secret: process.env.APP_SECRET,
            redirect_uri: 'http://localhost:3000/post-login',
            code
        }});
        const dataToken = responseToken.data as FBToken;
        console.log(dataToken);
        return dataToken.access_token;
    }
}