import React from 'react';
import userContainer from './userContainer';
const NavLinks = ({ user, logout }) => {
  return (
    <div className="nav-container">
      <ul className="nav-link">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about us</a>
        </li>
        <li>
          <a href="#">product</a>
        </li>
      </ul>
      <userContainer user={user} logout={logout} />
    </div>
  );
};

export default NavLinks;
