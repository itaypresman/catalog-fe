import React from 'react';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import './Application.css';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from '@components/pages/RegisterPage/RegisterPage.jsx';
import CatalogPage from '@components/pages/CatalogPage/CatalogPage.jsx';


function Application() {
    return (
        <React.Fragment>
            <Routes>
                <Route path={ '/' } exact={ true } element={ <LoginPage/> }/>
                <Route path={ '/register' } exact={ true } element={ <RegisterPage/> }/>
                <Route path={ '/catalogs' } element={ <CatalogPage/> }/>
            </Routes>
        </React.Fragment>
    );
}


export default Application;
