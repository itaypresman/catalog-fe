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

    setCatalogs = catalogs => {
        this.catalogs = catalogs;
        const primaryVerticals = catalogs.filter(catalog => catalog.isPrimary);
        this.primaryVertical = primaryVerticals?.[0]?.vertical || '';
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

        Platform.put('/catalog/edit', data, config).then(() => {
            const catalogs = JSON.parse(JSON.stringify(this.catalogs));

            for (const i in catalogs) {
                if (catalogs[i].id === catalogId) {
                    catalogs[i].isPrimary = isPrimary;
                    break;
                }
            }

            this.setCatalogs(catalogs);
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
                const catalogs = this.catalogs.filter(catalog => !catalogIds.includes(catalog.id));
                this.setCatalogs(catalogs);
            }
        }).catch();
    };

    getCatalogs = () => {
        const accessToken = Cookies.get('accessToken');
        const config = {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        };

        Platform.get('/catalog/get', config).then(response => {
            const catalogs = response.data || [];
            this.setCatalogs(catalogs);
        }).catch(() => {});
    };
}


export default new CatalogStore();
