import axios, { Method, AxiosResponse } from 'axios';
import { TokenStorage } from 'util/token.storage';

export default async function apiCall(method: string, path: string, data?: any) {
    const headers = new Headers();
    const authorizationconfig = TokenStorage.getAuthentificationConfiguration();
    headers.append('Accept', 'application/json');
    if (data && data instanceof FormData) {
        headers.append('Content-Type', 'multipart/form-data');
        const responseModel: AxiosResponse = await axios.request({
            url: `${process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3001'}/${path}`,
            method: method.toUpperCase() as Method,
            headers: headers,
            data: data,
            ...authorizationconfig,
        });
        return responseModel;
    }

    headers.append('Content-Type', 'application/json');
    const response: AxiosResponse = await axios.request({
        url: `${process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3001'}/${path}`,
        method: method.toUpperCase() as Method,
        headers: headers,
        data: data,
        ...authorizationconfig,
    });
    return response;
}
