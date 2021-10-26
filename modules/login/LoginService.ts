import * as queryString from 'query-string';
export class LoginService {
    async execute() {
        const stringParams = queryString.stringify({
            client_id: process.env.APP_ID,
            redirect_uri: "http://localhost:3000/post-login",
            scope: ['instagram_basic', 'instagram_manage_messages', 'pages_manage_metadata'].join(','),
            responseType: 'code',
            auth_type: 'rerequest',
            display: 'popup'
        });

        const facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${stringParams}`;
        console.log(facebookLoginUrl);
        return facebookLoginUrl;
    }
}