import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {setRestaurants} from './actions/restaurants';
import { Provider } from 'react-redux';
import axios from 'axios';
import './App.css';
import RestaurantsList from './components/RestaurantsList'

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <h1>All Restaurants</h1>
    <RestaurantsList />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>loading....</p>, document.getElementById('app'));

axios.get('http://localhost:8001/api/restaurants/')
  .then(response =>
    response.data.map(restaurant => ({
      id: restaurant.id,
      english_name: restaurant.english_name,
      chinese_name: restaurant.chinese_name,
      address: restaurant.address,
      phone: restaurant.phone,
      introduction: restaurant.introduction,
      hours: restaurant.hours,
      comments: restaurant.comments
    })))
  .then(restaurants => {
    store.dispatch(setRestaurants(restaurants));
  })
  .then(() => renderApp())
  .catch(error => console.log(`Loading ${error}`));