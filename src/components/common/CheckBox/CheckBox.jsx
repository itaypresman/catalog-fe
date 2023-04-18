import React from 'react';
import './CheckBox.css';


function CheckBox({text, isChecked, onClick, isDisabled = false}) {
    const disableClass = isDisabled ? 'label-is-disabled' : '';
    return (
        <label className={`label-is-primary ${disableClass}`}>
            <input type={'checkbox'} checked={isChecked} onChange={onClick} disabled={isDisabled}/>
            {text}
        </label>
    );
}


export default CheckBox;
