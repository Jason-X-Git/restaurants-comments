const restaurantsReducerDefaultState = [];

export default (state = restaurantsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            return [
                ...state,
                action.RESTAURANT
            ];
        case 'REMOVE_RESTAURANT':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_RESTAURANT':
            return state.map((RESTAURANT) => {
                if (RESTAURANT.id === action.id) {
                    return {
                        ...RESTAURANT,
                        ...action.updates
                    };
                } else {
                    return RESTAURANT;
                };
            });
        case 'SET_RESTAURANTS':
            return action.restaurants;
        default:
            return state;
    }
};