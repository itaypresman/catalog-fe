import React from 'react';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import './Application.css';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from '@components/pages/RegisterPage/RegisterPage.jsx';
import CatalogPage from '@components/pages/CatalogPage/CatalogPage.jsx';
import RedirectIfLoggedIn from '@components/RedirectIfLoggedIn.jsx';
import RedirectIfLoggedOut from '@components/RedirectIfLoggedOut.jsx';


function Application() {
    return (
        <React.Fragment>
            <Routes>
                <Route path={ '/' } exact={ true } element={ <RedirectIfLoggedIn><LoginPage/></RedirectIfLoggedIn> }/>
                <Route path={ '/register' } exact={ true } element={ <RedirectIfLoggedIn><RegisterPage/></RedirectIfLoggedIn> }/>
                <Route path={ '/catalogs' } element={ <RedirectIfLoggedOut><CatalogPage/> </RedirectIfLoggedOut>}/>
            </Routes>
        </React.Fragment>
    );
}


export default Application;
