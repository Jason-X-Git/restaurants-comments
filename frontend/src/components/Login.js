import React, { Component } from "react";
import { connect } from "react-redux";
import * as auth from '../actions/auth';
import { Link, Redirect } from "react-router-dom";


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: props.username ? props.username : '',
            password: props.password ? props.password : ''
        }
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    onSubmit = e => {
        e.preventDefault();

        if (!this.state.username || !this.state.password) {
            this.setState(() => ({ error: 'Please provide username and password.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.login(this.state.username, this.state.password)
        }


    }

    onUserNameChange = (e) => {
        const username = e.target.value
        if (username) {
            this.setState({ username })
        }
    }

    onPasswordChange = (e) => {
        const password = e.target.value
        if (password) {
            this.setState({ password })
        }
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }
        return (
            <div className="content-container">
            
            <form onSubmit={this.onSubmit}>

                <fieldset>
                    <legend>Login</legend>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    {!this.state.error && this.props.errors.length > 0 && (
                        <ul>
                            {this.props.errors.map(error => (
                                <li key={error.field}>{error.message}</li>
                            ))}
                        </ul>
                    )}
                    <p>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text" id="username"
                            onChange={this.onUserNameChange} />
                    </p>
                    <p>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password" id="password"
                            onChange={this.onPasswordChange} />
                    </p>
                    <p>
                        <button type="submit">Login</button>
                    </p>

                    <p>
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </fieldset>
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    let errors = [];
    if (state.auth.errors) {
        errors = Object.keys(state.auth.errors).map(field => {
            return { field, message: state.auth.errors[field] };
        });
    }
    return {
        errors,
        isAuthenticated: state.auth.isAuthenticated
    };
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => {
            return dispatch(auth.login(username, password));
        },
        onUnload: () =>
           dispatch({ type: 'LOGIN_PAGE_UNLOADED' })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);