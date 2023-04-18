import { action, observable, makeObservable } from 'mobx';
import Platform from '@lib/beApi.js';
import Cookies from 'js-cookie';


class CatalogStore {
    catalogs = '';
    primaryVertical = '';

    constructor() {
        makeObservable(this, {
            catalogs: observable,
            primaryVertical: observable,

            createCatalog: action,
            editPrimary: action,
            deleteCatalogs: action,
            getCatalogs: action,
        });
    };

    createCatalog = () => {
        const data = {
            email: this.email,
            password: this.password,
        };

        Platform.post('/auth/login', data).then(response => {
            if (response.data.accessToken) {
                this.accessToken = response.data.accessToken;
                Cookies.set('accessToken', response.data.accessToken);
            }
        }).catch(() => {});
    };

    editPrimary = (catalogId, isPrimary) => {
        const accessToken = Cookies.get('accessToken');
        const config = {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        };

        const data = {
            catalogId,
            isPrimary
        };

        Platform.put('/catalog/edit', data, config).then(response => {
            for (const i in this.catalogs) {
                if (this.catalogs[i].id === catalogId) {
                    this.catalogs[i].isPrimary = isPrimary;
                    break;
                }
            }
        }).catch(() => {});
    };

    deleteCatalogs = () => {
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

    getCatalogs = () => {
        const accessToken = Cookies.get('accessToken');
        const config = {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        };

        Platform.get('/catalog/get', config).then(response => {
            if (response.data?.length) {
                this.catalogs = response.data;
            }
        }).catch(() => {});
    };
}


export default new CatalogStore();
