import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import AuthStore from '@stores/AuthStore.js';

const RedirectIfLoggedIn = ({children}) => {
    const accessToken = Cookies.get('accessToken');
    AuthStore.setAccessToken(accessToken);

    if (AuthStore.accessToken) {
        return <Navigate to={'/catalogs'}/>;
    }

    return children;
};

export default RedirectIfLoggedIn;
