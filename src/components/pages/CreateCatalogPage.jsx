import React, {useState} from 'react';
import TextInput from '@components/common/TextInput';
import Index from '@components/common/SelectInput';
import Button from '@components/common/Button';
import {useNavigate} from 'react-router-dom';
import CatalogStore from '@stores/CatalogStore';
import CheckBox from '@components/common/CheckBox';


function CatalogCreatePage() {
    const navigate = useNavigate()

    const verticals = {
        fashion: 'Fashion',
        home: 'Home',
        general: 'General',
    };

    const [name, setName] = useState('');
    const [vertical, setVertical] = useState('fashion');
    const [isPrimary, setIsPrimary] = useState(false);

    const onNameEdit = e => {
        setName(e.target.value);
    };

    const onSaveClick = async () => {
        const response = await CatalogStore.createCatalog(name, vertical, isPrimary);

        if (response.status === 201) {
            navigate('/catalogs');
        }
    };

    const onIsPrimaryClick = e => {
        setIsPrimary(e.target.checked);
    };

    const onVerticalChange = e => {
        setVertical(e.target.value);
    };

    const onGoBackClick = () => {
        navigate('/catalogs')
    };

    const isDisabledPrimary = CatalogStore.primaryVertical && (CatalogStore.primaryVertical !== vertical);

    return (
        <div className={'create-catalog'}>
            <h2>Create Catalog</h2>
            <div className={'go-back'} onClick={onGoBackClick}>←go back</div>
            <div>
                <div className={'form-group'}>
                    <TextInput value={name} placeholder={'Name'} onTextChange={onNameEdit}/>
                </div>
                <div className={'form-group'}>
                    <Index items={verticals} value={vertical} onChange={onVerticalChange}/>
                </div>
                <div className={'form-group'}>
                    <CheckBox text={'Is Primary'} isChecked={isPrimary} onClick={onIsPrimaryClick}
                              isDisabled={isDisabledPrimary}/>
                </div>
                <div className={'form-group'}>
                    <Button className={'btn btn-new'} text={'Save'} onClick={onSaveClick}/>
                </div>
            </div>

        </div>
    );
}


export default CatalogCreatePage;
