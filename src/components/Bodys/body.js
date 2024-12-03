import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import instance from '../../services/LoginService';

function Body() {
  return (
    <div className="search">
      { instance.isLoggedIn && <SearchBar /> }
    </div>
  );
}

export default Body;