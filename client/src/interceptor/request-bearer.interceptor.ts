import axios, { AxiosRequestConfig } from 'axios';
import { TokenStorage } from 'util/token.storage';

axios.interceptors.request.use(
    (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
        const authentificationConfig = TokenStorage.getAuthentificationConfiguration();
        Object.assign(config, authentificationConfig);
        return Promise.resolve(config);
    }, (error) => {
        return Promise.reject(error);
    }
);
