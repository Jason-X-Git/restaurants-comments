const restaurantsReducerDefaultState = [];

export default (state = restaurantsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            return [
                ...state,
                action.restaurant
            ];
        case 'REMOVE_RESTAURANT':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_RESTAURANT':
            return state.map((restaurant) => {
                if (restaurant.id === action.id) {
                    return {
                        ...restaurant,
                        ...action.updates
                    };
                } else {
                    return restaurant;
                };
            });
        case 'SET_RESTAURANTS':
            return action.restaurants;
        default:
            return state;
    }
};