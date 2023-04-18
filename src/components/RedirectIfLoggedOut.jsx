import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import AuthStore from '@stores/AuthStore.js';

const RedirectIfLoggedOut = ({ children }) => {
    const accessToken = Cookies.get('accessToken');
    AuthStore.setAccessToken(accessToken);

    if (!AuthStore.accessToken) {
        return <Navigate to={'/'} />;
    }

    return children;
};

export default RedirectIfLoggedOut;
