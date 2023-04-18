import React, {useState} from 'react';
import './CatalogTable.css';
import CatalogStore from '@stores/CatalogStore.js';
import Button from '@components/common/Button/Button.jsx';


function Row({id, name, vertical, isPrimary, onSelectClick}) {
    const onPrimaryClick = () => {
        CatalogStore.editPrimary(id, !isPrimary);
    };

    const btnText = isPrimary ? 'Remove Primary' : 'Set Primary';
    const className = isPrimary ? 'btn btn-delete' : 'btn btn-primary';
    const [isChecked, setIsChecked] = useState(false);
    const isDisabled = CatalogStore.primaryVertical && (CatalogStore.primaryVertical !== vertical);

    const onCheckBoxClick = e => {
        onSelectClick(e.target.checked, id);
        setIsChecked(e.target.checked);
    };

    return (
        <tr>
            <td><input type={'checkbox'} checked={isChecked} onChange={onCheckBoxClick}/></td>
            <td>{name}</td>
            <td>{vertical}</td>
            <td>
                <Button
                    className={className}
                    onClick={onPrimaryClick}
                    text={btnText}
                    isDisabled={isDisabled}
                />
            </td>
        </tr>
    );
}


export default Row;
