import { action, observable, makeObservable } from 'mobx';
import Platform from '@lib/beApi.js';


class UserStore {
    searchText = '';
    results = [];
    currentFilm = null;
    error = null;

    constructor() {
        makeObservable(this, {
            searchText: observable,
            results: observable,
            currentFilm: observable,
            error: observable,

            setSearchText: action,
            setResults: action,
            setCurrentFilm: action,
            makeSearch: action,
            getFilm: action,
            getSearchText: action,
        });
    };

    setSearchText = searchText => {
        this.searchText = searchText;

        if (!this.searchText) {
            this.results = [];
        }
    };

    setResults = results => {
        this.results = results;
    };

    makeSearch = searchText => {
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

    getFilm = filmId => {
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

    setCurrentFilm = film => {
        this.currentFilm = film;
    }
    getSearchText = () => {
        return this.searchText;
    }
}


export default new UserStore();
