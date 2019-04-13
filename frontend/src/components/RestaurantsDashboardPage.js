import React from 'react';
import RestaurantsList from './RestaurantsList';
import RestaurantsListFilters from './RestaurantsListFilters';
import { connect } from "react-redux";
import * as auth from '../actions/auth';

const RestaurantsDashboardPage = (props) => (
  <div>
    <h2>{props.username}, Welcome to Your Restaurants!</h2>
    <div style={{ textAlign: "right" }}>
      <button onClick={props.logout}>logout</button>
  </div>
  <hr />
  <div>
    <RestaurantsListFilters />
    <RestaurantsList />
  </div>
  </div>
);


const mapStateToProps = state => {
  return {
    // user: state.auth.user,
    username: state.auth.username,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(auth.logout()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsDashboardPage);

