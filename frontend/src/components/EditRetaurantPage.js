import React from 'react';
import { connect } from 'react-redux';
import RestaurantForm from './RestaurantForm'
import { startEditRestaurant, startRemoveRestaurant } from '../actions/restaurants';

export class EditRestaurantPage extends React.Component {
  onSubmit = (restaurant) => {
    console.log('Editing ', restaurant)
    this.props.startEditRestaurant(this.props.restaurant.id, restaurant);
    this.props.history.push('/');
  };
  onRemove = () => {
    console.log('Clikcing remove ', this.props.restaurant.id)
    this.props.startRemoveRestaurant(this.props.restaurant.id);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Page of {this.props.restaurant.english_name}</h1>
          </div>
        </div>
        <div className="content-container">
          <RestaurantForm
            restaurant={this.props.restaurant}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary"
            onClick={this.onRemove}>Remove restaurant</button>
        </div>

      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  restaurant: state.restaurants.find((restaurant) => restaurant.id === parseInt(props.match.params.id))
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditRestaurant: (id, restaurant) => dispatch(startEditRestaurant(id, restaurant)),
  startRemoveRestaurant: (id) => dispatch(startRemoveRestaurant(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRestaurantPage);
