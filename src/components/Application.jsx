import React from 'react';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from '@components/pages/RegisterPage';
import CatalogPage from '@components/pages/CatalogPage';
import RedirectIfLoggedIn from '@components/RedirectIfLoggedIn';
import RedirectIfLoggedOut from '@components/RedirectIfLoggedOut';
import CreateCatalogPage from '@components/pages/CreateCatalogPage';


function Application() {
    return (
        <React.Fragment>
            <Routes>
                <Route path={ '/' } exact={ true } element={ <RedirectIfLoggedIn><LoginPage/></RedirectIfLoggedIn> }/>
                <Route path={ '/register' } exact={ true } element={ <RedirectIfLoggedIn><RegisterPage/></RedirectIfLoggedIn> }/>
                <Route path={ '/catalogs' } element={ <RedirectIfLoggedOut><CatalogPage/></RedirectIfLoggedOut>}/>
                <Route path={ '/catalog/create' } element={ <RedirectIfLoggedOut><CreateCatalogPage/></RedirectIfLoggedOut>}/>
            </Routes>
        </React.Fragment>
    );
}


export default Application;
