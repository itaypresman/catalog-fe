import React from 'react';
import './LoginPage.css';
import AuthStore from '@stores/AuthStore';
import { observer } from 'mobx-react';
import AuthForm from "@components/common/AuthForm/AuthForm.jsx";


function LoginPage() {
    const onEmailChange = e => {
        AuthStore.setEmail(e.target.value);
    };

    const onPasswordChange = e => {
        AuthStore.setPassword(e.target.value);
    };

    const onLoginClick = () => {
        AuthStore.logIn();
    }

    return <AuthForm
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
        onButtonClick={onLoginClick}
    />;
}


export default observer(LoginPage);
