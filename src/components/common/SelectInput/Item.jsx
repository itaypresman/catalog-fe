import React from 'react';


function Item({name, value}) {
    return <option value={value} >{name}</option>;
}


export default Item;
