import React from 'react';
import Logo from "../logo/logo.jsx";
import UserBlock from "../user-block/user-block.jsx";

const Header = () => {
  return <header className="page-header movie-card__head">
    <Logo/>
    <UserBlock/>
  </header>;
};

export default Header;
