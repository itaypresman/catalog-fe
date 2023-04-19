import { action, observable, makeObservable } from 'mobx';
import Platform from '@lib/beApi.js';
import Cookies from 'js-cookie';


class AuthStore {
    email = '';
    password = '';
    accessToken = '';
    error = null;

    constructor() {
        makeObservable(this, {
            email: observable,
            password: observable,
            accessToken: observable,
            error: observable,

            setEmail: action,
            setPassword: action,
            setAccessToken: action,
            logIn: action,
            signUp: action,
            logOut: action,
            refreshToken: action,
        });
    };

    setEmail = email => {
        this.email = email;
    };

    setPassword = password => {
        this.password = password;
    };

    setAccessToken = accessToken => {
        this.accessToken = accessToken;
    };

    logIn = () => {
        const data = {
            email: this.email,
            password: this.password,
        };

        Platform.post('/auth/login', data).then(response => {
            if (response.data.accessToken) {
                this.accessToken = response.data.accessToken;
                this.error = null;
            }
        }).catch(this.handleError);
    };

    signUp = () => {
        const data = {
            email: this.email,
            password: this.password,
        };

        Platform.post('/auth/register', data).then(response => {
            if (response.data.accessToken) {
                this.accessToken = response.data.accessToken;
                this.error = null;
            }
        }).catch(this.handleError);
    };

    handleError = err => {
        if (Array.isArray(err.response?.data?.message)) {
            const errors = err.response?.data?.message;
            this.error = {};
            for (const msg of errors) {
                if (msg.includes('email')) {
                    this.error.email = msg;
                }

                if (msg.includes('password')) {
                    this.error.password = msg;
                }
            }
        } else {
            this.error = { password: err.response?.data?.message };
        }
    };

    logOut = () => {
        const config = {
            headers: { 'Authorization': `Bearer ${this.accessToken}` }
        };

        Platform.get('/auth/logout', config).then(() => {
            Cookies.remove('accessToken');
            this.accessToken = null;
        }).catch((err) => {
            if (err?.response?.data?.message === 'TokenExpiredError') {
                this.refreshToken(this.logOut);
            }
        });
    };

    refreshToken = (resend) => {
        const config = {
            headers: { 'Authorization': `Bearer ${this.accessToken}` }
        };

        Platform.get('/auth/token/refresh', config).then(response => {
            if (response.data.accessToken) {
                this.accessToken = response.data.accessToken;

                resend();
            }
        }).catch(() => {});
    };
}


export default new AuthStore();
