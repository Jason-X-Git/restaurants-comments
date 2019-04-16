import React, { Component } from 'react';
import RestaurantsList from './RestaurantsList';
import Header from './Header';
import RestaurantsListFilters from './RestaurantsListFilters';
import { connect } from "react-redux";
import * as auth from '../actions/auth';
import { startSetRestaurants } from '../actions/restaurants';
import { Link } from "react-router-dom";

class RestaurantsDashboardPage extends Component {

  componentDidMount() {
    this.props.startSetRestaurants();
  };

  render() {
    return <div>
      <div className="content-container">
        <RestaurantsListFilters />
        <RestaurantsList />
      </div>
    </div>
  }
};


const mapStateToProps = state => {
  return {
    // user: state.auth.user,
    username: state.auth.username,
    total: state.restaurants.length
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(auth.logout()),
    startSetRestaurants: () => dispatch(startSetRestaurants())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsDashboardPage);

