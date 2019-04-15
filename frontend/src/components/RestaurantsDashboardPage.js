import React, { Component } from 'react';
import RestaurantsList from './RestaurantsList';
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
        <header className="header">
        <div className="content-container">
          <div className="header__content">
            <Link className="header__title" to="/">
              {this.props.username ?
                <h2>{this.props.username}, Welcome to Your {this.props.total} Restaurants!</h2>
                : <h2>Welcome to Restaurants Dashboard! ({this.props.total} )</h2>
              }</Link>
            <div style={{ textAlign: "right" }}>
              {this.props.username ?
                <Link className="button button--link" onClick={this.props.logout}>logout</Link>
                : <Link className="button button--link" to="/login">Login</Link>}
            </div></div>
        </div>
        </header>


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

