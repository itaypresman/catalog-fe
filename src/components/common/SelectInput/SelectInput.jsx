import React from 'react';
import './SelectInput.css';
import Item from '@components/common/SelectInput/Item.jsx';


function SelectInput({items, value, onChange}) {
    const options = Object.keys(items).map(key => ({ name: items[key], value: key }));
    const selects = options.map((item, i) => <Item key={i} {...item} />);

    return (
        <select value={value} onChange={onChange}>
            {selects}
        </select>
    );
}


export default SelectInput;
