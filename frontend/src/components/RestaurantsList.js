import React from 'react';
import { connect } from 'react-redux';
import RestaurantItem from './RestaurantItem';

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
        restaurants: state.restaurants
    };
};

export default connect(mapStateToProps)(RestaurantsList);
