import { get } from "http";

export const loadUser = () => {
    return (dispatch, getState) => {
        dispatch({ type: "USER_LOADING" });

        const token = getState().auth.token;

        let headers = {
            "Content-Type": "application/json",
        };

        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }
        return fetch("http://localhost:8001/auth/user/", { headers, })
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return { status: res.status, data };
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    dispatch({ type: 'USER_LOADED', user: res.data });
                    return res.data;
                } else if (res.status >= 400 && res.status < 500) {
                    dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
                    throw res.data;
                }
            })
    }
};

export const login = (username, password) => {
    return (dispatch, getState) => {
        let headers = { "Content-Type": "application/json" };
        let body = JSON.stringify({ username, password });

        return fetch("http://localhost:8001/auth/login/", { headers, body, method: "POST" })
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return { status: res.status, data };
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                console.log('login in: ', res.status, res.data)
                if (res.status === 200) {
                    console.log('After login', res.data.key)
                    dispatch({ type: 'LOGIN_SUCCESSFUL', data: res.data, username });
                    return res.data;
                } else if (res.status === 403 || res.status === 401) {
                    dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
                    throw res.data;
                } else {
                    dispatch({ type: "LOGIN_FAILED", data: res.data });
                    throw res.data;
                }
            })
    }
}
export const register = (username, password1, password2) => {
    return (dispatch, getState) => {
        let headers = { "Content-Type": "application/json" };
        let body = JSON.stringify({ username, password1, password2 });
        console.log('body', body)

        return fetch("http://localhost:8001/auth/register/", { headers, body, method: "POST" })
            .then(res => {
                console.log('1st register data', res.status, res.data)
                if (res.status < 500) {
                    return res.json().then(data => {
                        return { status: res.status, data };
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                console.log('2nd register data', res.status, res.data)
                if (res.status === 201) {
                    dispatch({ type: 'REGISTRATION_SUCCESSFUL', data: res.data, username });
                    return res.data;
                } else if (res.status === 403 || res.status === 401) {
                    dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
                    throw res.data;
                } else {
                    dispatch({ type: "REGISTRATION_FAILED", data: res.data });
                    throw res.data;
                }
            })
    }
}

export const logout = () => {
    return (dispatch, getState) => {
        let headers = { "Content-Type": "application/json" };

        return fetch("http://localhost:8001/auth/logout/", { headers, body: "", method: "POST" })
            .then(res => {
                console.log('Connected logout url', res.status)
                if (res.status === 204) {
                    return { status: res.status, data: {} };
                } else if (res.status < 500) {
                    return res.json().then(data => {
                        console.log(res.status, data)
                        return { status: res.status, data };
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    dispatch({ type: 'LOGOUT_SUCCESSFUL' });
                    return res.data;
                } else if (res.status === 403 || res.status === 401) {
                    dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
                    throw res.data;
                }
            })
    }
}
