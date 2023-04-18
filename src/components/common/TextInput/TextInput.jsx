import React from 'react';
import './TextInput.css';


function TextInput({onTextChange, value, type = 'text', placeholder = ''}) {
    return (
        <input type={type} onChange={onTextChange} placeholder={placeholder} value={value} required/>
    );
}


export default TextInput;
