const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: localStorage.getItem("token")? true: false,
    isLoading: localStorage.getItem("token")? false: true,
    // user: null,
    errors: null,
    username: localStorage.getItem("username") ? localStorage.getItem("username") : null
};

let token;
let username;

export default function auth(state = initialState, action) {

    switch (action.type) {

        case 'USER_LOADING':
            return { ...state, isLoading: true };

        case 'USER_LOADED':
            return { ...state, isAuthenticated: true, isLoading: false, user: action.user };

        case 'LOGIN_SUCCESSFUL':
            token = action.data.key;
            username = action.username;
            localStorage.setItem("token", token);
            localStorage.setItem("username", username);
            console.log('Save token ', token, username);
            return { ...state, token: token, username, isAuthenticated: true, isLoading: false, errors: null };
        case 'LOGIN_PAGE_UNLOADED':
            return { ...state, errors: null }

        case 'AUTHENTICATION_ERROR':
            return { ...state, errors: action.data };

        case 'LOGIN_FAILED':
            return { ...state, errors: action.data };

        case 'LOGOUT_SUCCESSFUL':
            localStorage.removeItem("token");
            localStorage.removeItem("ussername");
            console.log('logout. token removed')
            return {
            
            };

        case 'REGISTRATION_SUCCESSFUL':
            token = action.data.key;
            username = action.username;
            localStorage.setItem("token", token);
            localStorage.setItem("username", username);
            console.log('Save token ', token, username);
            return { ...state, token, username, isAuthenticated: true, isLoading: false, errors: null };

        case 'REGISTRATION_FAILED':
            return { ...state, errors: action.data };

        case 'REGISTER_PAGE_UNLOADED':
            return { ...state, errors: null }

        default:
            return state;
    }
}