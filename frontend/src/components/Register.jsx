import React, {Component} from "react";
import {connect} from "react-redux";

import {Link, Redirect} from "react-router-dom";
import * as auth from '../actions/auth';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password1: "",
            password2: "",
        }
    }
    

    componentWillUnmount() {
        this.props.onUnload();
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.register(this.state.username, 
            this.state.password1,
            this.state.password2);
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }
        return (
            <form onSubmit={this.onSubmit}>
                <fieldset>
                    <legend>Register</legend>
                    {this.props.errors.length > 0 && (
                        <ul>
                            {this.props.errors.map(error => (
                                <li key={error.field}>{error.field}: {error.message}</li>
                            ))}
                        </ul>
                    )}
                    <p>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text" id="username"
                            onChange={e => this.setState({username: e.target.value})} />
                    </p>
                    <p>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password" id="password1"
                            onChange={e => this.setState({password1: e.target.value})} />
                    </p>
                    <p>
                        <label htmlFor="password">Password Again</label>
                        <input
                            type="password" id="password2"
                            onChange={e => this.setState({password2: e.target.value})} />
                    </p>
                    <p>
                        <button type="submit">Register</button>
                    </p>

                    <p>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </fieldset>
            </form>
        )
    }
}

const mapStateToProps = state => {
    let errors = [];
    if (state.auth.errors) {
        errors = Object.keys(state.auth.errors).map(field => {
            return {field, message: state.auth.errors[field]};
        });
    }
    return {
        errors,
        isAuthenticated: state.auth.isAuthenticated
    };
}

const mapDispatchToProps = dispatch => {
    return {
        register: (username, password1, password2) => {
         dispatch(auth.register(username, password1, password2))
        },
        onUnload: () =>
            dispatch({ type: 'REGISTER_PAGE_UNLOADED' })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
