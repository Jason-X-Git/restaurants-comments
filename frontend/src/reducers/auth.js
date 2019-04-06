export default (state = {uid: 'jx'}, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                uid: action.uid,
                userName: action.userName
            };
        case 'LOGOUT':
            return {};
        
        default:
            return state;
    }
}