import axios, {AxiosInstance}  from 'axios';

export class AuthService {
    protected readonly axios: AxiosInstance;

    constructor(url: string) {
        this.axios= axios.create({
            baseURL: url,
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 3000, 
            timeoutErrorMessage: 'Request Timeout'
        });
    }
}