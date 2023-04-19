import React from 'react';


function TextInput({onTextChange, value, type = 'text', placeholder = ''}) {
    return (
        <input type={type} onChange={onTextChange} placeholder={placeholder} value={value} required/>
    );
}


export default TextInput;
