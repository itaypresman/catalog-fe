import React from 'react';


function Button({onClick, text, className = '', isDisabled = false}) {
    const disabledClass = isDisabled ? 'btn-disabled' : '';
    const classes = `${className} ${disabledClass}`
    return (
        <button className={classes} onClick={onClick} disabled={isDisabled}>{text}</button>
    );
}


export default Button;
