import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
    <div className="header__content">
      <Link className="header__title" to="/">
        <h1>Restaurants</h1>
      </Link>
      <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);


export default Header;