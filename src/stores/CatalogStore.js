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

    createCatalog = (name, vertical, isPrimary) => {
        const data = { name, vertical, isPrimary };
        const accessToken = Cookies.get('accessToken');
        const config = {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        };

        return Platform.post('/catalog/create', data, config);
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

    deleteCatalogs = (catalogIds) => {
        const accessToken = Cookies.get('accessToken');
        const config = {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        };
        const data = { catalogIds };

        Platform.post('/catalog/delete', data, config).then(res => {
            if (res.data.status === true) {
                this.catalogs = this.catalogs.filter(catalog => !catalogIds.includes(catalog.id));
            }
        }).catch();
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
