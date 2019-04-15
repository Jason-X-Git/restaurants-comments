import React from 'react';
import { connect } from 'react-redux';
import RestaurantItem from './RestaurantItem';
import selectRestaurants from '../selectors/restaurants';
import { Link } from 'react-router-dom'

export const RestaurantsList = (props) => (
    <div>
    {props.isAuthenticated &&
        <div className="page-header__actions">
            <Link to="/create" className="button">Add Restaurant</Link>
        </div>
    }
        <div>
            {props.restaurants.length > 0 ? (
                props.restaurants.map(restaurant => {

                    return (
                        <RestaurantItem key={restaurant.id} {...restaurant} />
                    );
                })
            ) : (
                    <p>No restaurants extracted...</p>
                )}
        </div>
    </div>
   
);

const mapStateToProps = (state) => {
    return {
        restaurants: selectRestaurants(state.restaurants, state.filters),
        isAuthenticated: state.auth.isAuthenticated
    };
};

export default connect(mapStateToProps)(RestaurantsList);
