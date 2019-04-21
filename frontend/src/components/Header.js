import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as auth from '../actions/auth';
import selectRestaurants from '../selectors/restaurants';

export const Header = (props) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/">
          {props.username ?
            <h2>{props.username}, Welcome to Your {props.total} Restaurants!</h2>
            : <h2>Welcome to Restaurants Dashboard! ({props.total} )</h2>
          }</Link>
        <div style={{ textAlign: "right" }}>
          {props.username ?
            <Link className="button button--link" onClick={props.logout}>logout</Link>
            : <Link className="button button--link" to="/login">Login</Link>}
        </div></div>
    </div>
  </header>
);


const mapStateToProps = state => {
  return {
    username: state.auth.username,
    total: selectRestaurants(state.restaurants, state.filters).length
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(auth.logout()),
    login: () => dispatch(auth.login()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
