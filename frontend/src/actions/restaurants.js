import axios from 'axios';

export const setRestaurants = (restaurants) => ({
    type: 'SET_RESTAURANTS',
    restaurants
});

export const startSetRestaurants = () => {
    return (dispatch, getState) => {
        return axios.get('http://localhost:8001/api/restaurants/')
            .then(response =>
                response.data.map(restaurant => ({
                    id: restaurant.id,
                    english_name: restaurant.english_name,
                    chinese_name: restaurant.chinese_name,
                    address: restaurant.address,
                    phone: restaurant.phone,
                    introduction: restaurant.introduction,
                    hours: restaurant.hours,
                    comments: restaurant.comments
                })))
            .then(restaurants => {
                dispatch(setRestaurants(restaurants));
            }).catch(error => console.log(`Loading ${error}`));
    }
};

export const editRestaurant = (id, updates) => ({
    type: 'EDIT_RESTAURANT',
    id,
    updates
});

export const startEditRestaurant = (id, updates) => {
    return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return axios.put(`http://localhost:8001/api/restaurants/${id}`, {...updates})
        .then(() => {
            dispatch(editRestaurant(id, updates))
        })
}
};

export const startRemoveRestaurant = () => {
    ''
};

