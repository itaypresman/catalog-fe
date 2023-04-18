import React from 'react';
import './SearchBox.css';
import MovieStore from '@stores/UserStore.js';
import { observer } from 'mobx-react';
import SearchItem from '@components/common/SearchBox/SearchItem.jsx';


function SearchBox() {
    const onTextChange = e => {
        MovieStore.setSearchText(e.target.value);

        if (MovieStore.searchText.length > 2) {
            MovieStore.makeSearch(MovieStore.searchText);
        }
    };

    const SearchResults = MovieStore.results.map(item => <SearchItem title={ item.Title } id={ item.imdbID }
                                                                     key={ item.imdbID }/>);
    return (
        <div id={ 'search-container' }>
            <input onChange={ onTextChange } type={ 'text' } id={ 'search-input' } placeholder={ 'Search' } value={MovieStore.searchText}/>
            <div id={ 'search-results' }>
                { MovieStore.results.length ? SearchResults : null }
            </div>
        </div>
    );
}

export default observer(SearchBox);
