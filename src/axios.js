import axios from 'axios';
import tokenProvider from 'axios-token-interceptor';

const http = axios.create({
    baseURL: 'https://trello.backend.tests.nekidaem.ru/api/v1',
    headers: {'Content-Type': 'application/json'}
});
http.interceptors.request.use(tokenProvider({
    getToken: () => {
        if ( localStorage.getItem('access_token'))  return localStorage.getItem('access_token');
        else {
            localStorage.removeItem('access_token');
            return 'none'
        }

    },
    headerFormatter: (getToken) => 'JWT ' + getToken,
}));


export default http;