import React from 'react';
import './AuthForm.css';
import { observer } from 'mobx-react';
import TextInput from '@components/common/TextInput/TextInput.jsx';
import Button from "@components/common/Button/Button.jsx";
import {Link} from "react-router-dom";


function AuthForm({onEmailChange, onPasswordChange, onButtonClick, isLogin = true }) {
    const headerText = isLogin ? 'Login' : 'Registration';
    const redirectLink = isLogin ? '/register' : '/';
    const redirectText = isLogin ? 'or sign up' : 'or login';
    const buttonText = isLogin ? 'Login' : 'Sign Up';

    return (
        <div className={'login-form-container'}>
            <h1>{headerText}</h1>
            <form className={'login-form'} onSubmit={e => e.preventDefault()}>
                <div className={'form-group'}>
                    <label htmlFor={'username'}>Email</label>
                    <TextInput onTextChange={ onEmailChange } placeholder={'Enter your email'} />
                </div>
                <div className={'form-group'}>
                    <label htmlFor={'password'}>Password</label>
                    <TextInput type={'password'} onTextChange={ onPasswordChange } placeholder={'Enter your password'}/>
                </div>
                <Button text={buttonText} onClick={onButtonClick} />
                <div className={'signup-link'}>
                    <Link to={redirectLink}>{redirectText}</Link>
                </div>
            </form>
        </div>
    );
}


export default observer(AuthForm);
