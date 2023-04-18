import { action, observable, makeObservable } from 'mobx';
import Platform from '@lib/beApi.js';


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

    logIn = searchText => {
        const data = {
            email: this.email,
            password: this.password,
        };

        Platform.post('/auth/login', data).then(response => {
            if (response.status === 200) {
                console.log(response);
            }
        }).catch(() => {});
    };

    signUp = () => {
        const params = {
            title: searchText,
        };

        Platform.get('/search', { params }).then(response => {
            if ((response.status === 200) && !('error' in response.data)) {
                this.results = response.data;
                this.error = null;
            } else if ((response.status === 200) && ('error' in response.data)) {
                this.error = response.data.error;
                this.results = [];
            } else {
                this.error = 'api_error';
                this.results = [];
            }
        }).catch(() => {});;
    };

    logOut = filmId => {
        const params = {
            id: filmId,
        };

        Platform.get('/filmInfo', { params }).then(response => {
            if ((response.status === 200) && !('error' in response.data)) {
                this.currentFilm = response.data;
                this.error = null;
            } else if ((response.status === 200) && ('error' in response.data)) {
                this.error = response.data.error;
                this.currentFilm = null;
            } else {
                this.error = 'api_error';
                this.currentFilm = null;
            }
        }).catch(() => {});
    };

    refreshToken = filmId => {
        const params = {
            id: filmId,
        };

        Platform.get('/filmInfo', { params }).then(response => {
            if ((response.status === 200) && !('error' in response.data)) {
                this.currentFilm = response.data;
                this.error = null;
            } else if ((response.status === 200) && ('error' in response.data)) {
                this.error = response.data.error;
                this.currentFilm = null;
            } else {
                this.error = 'api_error';
                this.currentFilm = null;
            }
        }).catch(() => {});
    };
}


export default new AuthStore();
