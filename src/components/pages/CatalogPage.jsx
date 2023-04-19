import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import CatalogTable from '@components/common/CatalogTable';
import Button from '@components/common/Button';
import AuthStore from '@stores/AuthStore';
import {useNavigate} from 'react-router-dom';
import CatalogStore from '@stores/CatalogStore';
import NoData from '@components/common/NoData';


function CatalogPage() {
    const navigate = useNavigate();
    const [selectedCatalogs, setSelectedCatalogs] = useState([]);

    useEffect(() => {
        if (!AuthStore.accessToken) {
            navigate('/');
        }
    }, [AuthStore.accessToken]);

    useEffect(() => {
        CatalogStore.getCatalogs();
    }, []);

    const onLogOutClick = () => {
        AuthStore.logOut();
    };

    const onNewCatalogClick = () => {
        navigate('/catalog/create')
    };

    const selectCatalog = (isChecked, id) => {
        let selectedCatalogsCopy = JSON.parse(JSON.stringify(selectedCatalogs));
        if (isChecked) {
            selectedCatalogsCopy.push(id);
        } else {
            selectedCatalogsCopy = selectedCatalogsCopy.filter(catalogId => catalogId !== id);
        }

        setSelectedCatalogs(selectedCatalogsCopy);
    };

    const onDeleteCatalogClick = () => {
        CatalogStore.deleteCatalogs(selectedCatalogs);
        setSelectedCatalogs([]);
    };

    return (
        <div className={'catalogs'}>
            <h2>Catalogs</h2>
            <div className={'btn-container'}>
                <Button className={'btn-new'} text={'New'} onClick={onNewCatalogClick}/>
                <Button className={'btn-delete'} text={'Delete'} onClick={onDeleteCatalogClick} isDisabled={!selectedCatalogs.length}/>
                <span onClick={onLogOutClick} className={'logout'}>Logout</span>
            </div>

            {
                CatalogStore.catalogs?.length
                    ? <CatalogTable catalogs={CatalogStore.catalogs} onSelectClick={selectCatalog}/>
                    : <NoData/>
            }
        </div>
    );
}


export default observer(CatalogPage);
