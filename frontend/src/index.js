import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetRestaurants} from './actions/restaurants';
import { Provider } from 'react-redux';
import './App.css';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
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

store.dispatch(startSetRestaurants()).then(() => {
  renderApp();
}
);