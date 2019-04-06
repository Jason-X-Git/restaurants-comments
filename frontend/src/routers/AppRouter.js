import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import RestaurantsDashboardPage from '../components/RestaurantsDashboardPage';
import AddRestaurantPage from '../components/AddRestaurantPage';
import EditRestaurantPage from '../components/EditRetaurantPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div> 
      <Switch>
        <PublicRoute path="/" component={RestaurantsDashboardPage} exact={true} />
        <PrivateRoute path="/create" component={AddRestaurantPage} />
        <PrivateRoute path="/edit/:id" component={EditRestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
