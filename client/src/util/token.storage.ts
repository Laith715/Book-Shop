import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { TokenModel } from 'modules/root/models/token.model';

export class TokenStorage {

    private static readonly localStorageAccessTokenKey: string = 'access';
    private static readonly localStorageRefreshTokenKey: string = 'refresh';
    private static readonly refreshTokenApiPath: string = 'token';
    private static readonly refreshTokenApiMethod = 'POST';

    public static getAuthentificationConfiguration(): AxiosRequestConfig {
        return {
            headers: { Authorization: `Bearer ${this.getAccessToken()}` }
        };
    }

    public static storeTokenModel(tokenModel: TokenModel) {
        this.storeAccessToken(tokenModel.accessToken);
        this.storeRefreshToken(tokenModel.refreshToken);
    }

    public static refreshToken(): Promise<TokenModel> {
        return new Promise((resolve, reject) => {
            axios.request({
                method: TokenStorage.refreshTokenApiMethod,
                url: `${process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3001'}/${TokenStorage.refreshTokenApiPath}`,
                data: { refreshToken: this.getRefreshToken() },
            }).then((response: AxiosResponse<TokenModel>) => {
                this.storeAccessToken(response.data.accessToken);
                this.storeRefreshToken(response.data.refreshToken);
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    public static clear(): void {
        localStorage.removeItem(TokenStorage.localStorageAccessTokenKey);
        localStorage.removeItem(TokenStorage.localStorageRefreshTokenKey);
    }

    private static storeAccessToken(token: string): void {
        localStorage.setItem(TokenStorage.localStorageAccessTokenKey, token);
    }
    private static storeRefreshToken(token: string): void {
        localStorage.setItem(TokenStorage.localStorageRefreshTokenKey, token);
    }

    private static getAccessToken(): string | null {
        return localStorage.getItem(TokenStorage.localStorageAccessTokenKey);
    }
    private static getRefreshToken(): string | null {
        return localStorage.getItem(TokenStorage.localStorageRefreshTokenKey);
    }
}
