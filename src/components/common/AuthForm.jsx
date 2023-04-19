import React from 'react';
import { observer } from 'mobx-react';
import TextInput from '@components/common/TextInput';
import Button from '@components/common/Button';
import {Link} from 'react-router-dom';
import AuthStore from "@stores/AuthStore";
import CatalogStore from "@stores/CatalogStore";


function AuthForm({onEmailChange, onPasswordChange, onButtonClick, isLogin = true }) {
    const headerText = isLogin ? 'Login' : 'Registration';
    const redirectLink = isLogin ? '/register' : '/';
    const redirectText = isLogin ? 'or sign up' : 'or login';
    const buttonText = isLogin ? 'Login' : 'Sign Up';
    const emailErrorMsg = AuthStore.error?.email;
    const passwordErrorMsg = AuthStore.error?.password;

    const onRedirectClick = () => {
        AuthStore.error = null;
    }

    return (
        <div className={'login-form-container'}>
            <h1>{headerText}</h1>
            <form className={'login-form'} onSubmit={e => e.preventDefault()}>
                <div className={'form-group'}>
                    <label htmlFor={'username'}>Email</label>
                    <TextInput onTextChange={ onEmailChange } placeholder={'Enter your email'} isError={!!emailErrorMsg} />
                    <span className={'error-message'}>{emailErrorMsg}</span>
                </div>
                <div className={'form-group'}>
                    <label htmlFor={'password'}>Password</label>
                    <TextInput type={'password'} onTextChange={ onPasswordChange } placeholder={'Enter your password'} isError={!!passwordErrorMsg}/>
                    <span className={'error-message'}>{passwordErrorMsg}</span>
                </div>
                <Button text={buttonText} onClick={onButtonClick} />
                <div className={'signup-link'}>
                    <Link to={redirectLink} onClick={onRedirectClick}>{redirectText}</Link>
                </div>
            </form>
        </div>
    );
}


export default observer(AuthForm);
