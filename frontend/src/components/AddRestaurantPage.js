import React from 'react';
import { connect } from 'react-redux';
import RestaurantForm from './RestaurantForm';

import { startAddRestaurant } from '../actions/restaurants';

export class AddRestaurantPage extends React.Component {
  onSubmit = (restaurant) => {
    this.props.startAddRestaurant(restaurant);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Restaurant</h1>
          </div>
        </div>
        <div className="content-container">
          <RestaurantForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddRestaurant: (restaurant) => dispatch(startAddRestaurant(restaurant))
});

export default connect(undefined, mapDispatchToProps)(AddRestaurantPage);