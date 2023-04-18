import React from 'react';
import './SearchBox.css';
import UserStore from '@stores/UserStore.js';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';


function SearchItem({ title, id }) {
    const navigate = useNavigate()

    const onFilmClick = () => {
        UserStore.setSearchText('');
        navigate(id);
    }

    return (
        <div onClick={ onFilmClick }>
            { title }
        </div>
    );
}

export default observer(SearchItem);
