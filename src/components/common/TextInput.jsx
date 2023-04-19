import React from 'react';


function TextInput({onTextChange, value, type = 'text', placeholder = '', isError = false}) {
    const className = isError ? 'error' : '';
    return (
        <input className={className} type={type} onChange={onTextChange} placeholder={placeholder} value={value} required/>
    );
}


export default TextInput;
