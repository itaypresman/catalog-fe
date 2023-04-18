import React from 'react';
import './RegisterPage.css';
import AuthStore from '@stores/AuthStore';
import { observer } from 'mobx-react';
import AuthForm from '@components/common/AuthForm/AuthForm.jsx';


function RegisterPage() {
    const onEmailChange = e => {
        AuthStore.setEmail(e.target.value);
    };

    const onPasswordChange = e => {
        AuthStore.setPassword(e.target.value);
    };

    const onLoginClick = () => {
        AuthStore.signUp();
    }

    return <AuthForm
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
        onButtonClick={onLoginClick}
        isLogin={false}
    />;
}


export default observer(RegisterPage);
