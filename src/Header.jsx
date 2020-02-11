import React from "react";
import logo from './logo.svg';
import search from './search.svg';
import MiniNav from './MiniNav.jsx';

function Header(){
  return(
    <header className="App-header">
      <span className="logo">BookFace'd</span>
      <span className="navBar"><MiniNav/></span>

      <img src={logo} className="App-logo" alt="logo" />
      <img src={search} className="App-search" alt="search"/>


    </header>
  );
}

export default Header;
