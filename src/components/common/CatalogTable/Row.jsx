import React from 'react';
import './CatalogTable.css';
import CatalogStore from '@stores/CatalogStore.js';
import Button from '@components/common/Button/Button.jsx';


function Row({id, name, vertical, isPrimary}) {
    const onPrimaryClick = () => {
        CatalogStore.editPrimary()
    };
    const btnText = isPrimary ? 'Remove Primary' : 'Set Primary' ;
    const className = isPrimary ? 'btn btn-delete' : 'btn btn-primary' ;

    return (
        <tr>
            <td><input type="checkbox"/></td>
            <td>{name}</td>
            <td>{vertical}</td>
            <td>
                <Button className={className} onClick={onPrimaryClick} text={btnText} />
            </td>
        </tr>
    );
}


export default Row;
