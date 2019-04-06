import React from 'react';
import RestaurantsList from './RestaurantsList';
import RestaurantsListFilters from './RestaurantsListFilters';

const RestaurantsDashboardPage = () => (
  <div>
    <RestaurantsListFilters />
    <RestaurantsList />
  </div>
);

export default RestaurantsDashboardPage;
