import React from 'react';
import { connect } from 'react-redux';
import RestaurantItem from './RestaurantItem';
import selectRestaurants from '../selectors/restaurants';

export const RestaurantsList = (props) => (
    <div>
        {props.restaurants.length > 0 ? (
            props.restaurants.map(restaurant => {
                
                return (
                    <RestaurantItem key={restaurant.id} {...restaurant}/>
                );
            })
        ) : (
                <p>No restaurants extracted...</p>
            )}
    </div>
);

const mapStateToProps = (state) => {
    return {
        restaurants: selectRestaurants(state.restaurants, state.filters)
    };
};

export default connect(mapStateToProps)(RestaurantsList);
