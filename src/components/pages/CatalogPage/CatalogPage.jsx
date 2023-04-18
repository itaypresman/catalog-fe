import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import './CatalogPage.css';
import CatalogTable from '@components/common/CatalogTable/CatalogTable.jsx';
import Button from '@components/common/Button/Button.jsx';
import AuthStore from '@stores/AuthStore.js';
import {useNavigate} from 'react-router-dom';
import CatalogStore from '@stores/CatalogStore.js';
import NoData from '@components/common/NoData/NoData.jsx';


function CatalogPage() {
    const navigate = useNavigate();
    const [selectedCatalogs, setSelectedCatalogs] = useState([]);

    useEffect(() => {
        if (!AuthStore.accessToken) {
            navigate('/');
        }
    }, [AuthStore.accessToken]);

    useEffect(() => {
        CatalogStore.getCatalogs()
    }, []);

    const onLogOutClick = () => {
        AuthStore.logOut();
    };

    const onNewCatalogClick = () => {
        navigate('/catalog/create')
    };

    const selectCatalog = (isChecked, id) => {
        let selectedCatalogsCopy = JSON.parse(JSON.stringify(selectedCatalogs))
        if (isChecked) {
            selectedCatalogsCopy.push(id);
        } else {
            selectedCatalogsCopy = selectedCatalogsCopy.filter(catalogId => catalogId !== id);
        }

        setSelectedCatalogs(selectedCatalogsCopy);
    };

    const onDeleteCatalogClick = () => {
        CatalogStore.deleteCatalogs(selectedCatalogs)
    };

    return (
        <div className={'catalogs'}>
            <h2>Catalogs</h2>
            <div className={'btn-container'}>
                <Button className={'btn btn-new'} text={'New'} onClick={onNewCatalogClick}/>
                <Button className={'btn btn-delete'} text={'Delete'} onClick={onDeleteCatalogClick}/>
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
