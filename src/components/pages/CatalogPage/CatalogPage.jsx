import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import './CatalogPage.css';
import CatalogTable from '@components/common/CatalogTable/CatalogTable.jsx';
import Button from '@components/common/Button/Button.jsx';
import AuthStore from '@stores/AuthStore.js';
import {useNavigate} from 'react-router-dom';
import CatalogStore from '@stores/CatalogStore.js';
import NoData from '@components/common/NoData/NoData.jsx';


function CatalogPage() {
    const navigate = useNavigate()

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
    }

    return (
        <div className="catalogs">
            <h2>Catalogs</h2>
            <Button className={'btn btn-new'} text={'New'}/>
            <Button className={'btn btn-delete'} text={'Delete'}/>
            <span onClick={onLogOutClick} className="logout">Logout</span>
            {
                CatalogStore.catalogs?.length
                    ? <CatalogTable catalogs={CatalogStore.catalogs}/>
                    : <NoData/>
            }
        </div>
    );
}


export default observer(CatalogPage);
