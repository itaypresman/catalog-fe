// import React from 'react';
// import './Header.css';
// import SearchBox from '../SearchBox/SearchBox.jsx';
// import { useNavigate } from 'react-router-dom';
// import MovieStore from '@stores/UserStore.js';
//
//
// function Header() {
//     const navigate = useNavigate()
//
//     const onLogoClick = () => {
//         navigate('/');
//         MovieStore.setSearchText('');
//         MovieStore.setResults([]);
//         MovieStore.setCurrentFilm(null);
//     };
//
//     return (
//         <header>
//             <div id={ 'logo' } onClick={onLogoClick}>OIMDB</div>
//             <SearchBox/>
//         </header>
//     );
// }
//
// export default Header;
