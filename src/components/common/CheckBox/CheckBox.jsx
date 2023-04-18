import React from 'react';
import './CheckBox.css';


function CheckBox({text, isChecked, onClick}) {
    return (
        <label className={'label-is-primary'}>
            <input type="checkbox" checked={isChecked} onChange={onClick}/>
            {text}
        </label>
    );
}


export default CheckBox;
