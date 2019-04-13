import React, { Component } from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import configureStore from './store/configureStore';

import { Provider, connect } from "react-redux";
import * as auth from './actions/auth';

import RestaurantsDashboardPage from './components/RestaurantsDashboardPage';

import NotFound from "./components/NotFoundPage";
import Register from "./components/Register";
import Login from "./components/Login";

const store = configureStore();

class RootContainerComponent extends Component {

    // componentDidMount() {
    //     this.props.loadUser();
    // }

    PrivateRoute = ({component: ChildComponent, ...rest}) => {
        return <Route {...rest} render={props => {
            if (this.props.username) {
                return <em>Loading...</em>;
            } else if (!this.props.auth.isAuthenticated) {
                return <Redirect to="/login" />;
            } else {
                return <ChildComponent {...props} />
            }
        }} />
    }

    render() {
        let {PrivateRoute} = this;
        return (
            <BrowserRouter>
                <Switch>
                    <PrivateRoute exact path="/" component={RestaurantsDashboardPage} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUser: () => {
            return dispatch(auth.loadUser());
        }
    }
}

let RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainerComponent);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootContainer />
            </Provider>
        )
    }
}