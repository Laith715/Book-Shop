export class TokenModel {

    constructor(access?: string, refresh?: string) {
        this.accessToken = access;
        this.refreshToken = refresh;
    }

    public accessToken: string;
    public refreshToken: string;
}
