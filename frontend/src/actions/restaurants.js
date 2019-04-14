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
        let headers = { "Content-Type": "application/json" };
        let { token } = getState().auth;

        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }

        let body =JSON.stringify({...updates});

        return fetch(`http://localhost:8001/api/restaurants/${id}/`, { headers, method: "PATCH", body })
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
                    return dispatch(editRestaurant(id, updates));
                } else if (res.status === 401 || res.status === 403) {
                    dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
                    throw res.data;
                }
            })
    }
};

export const startRemoveRestaurant = () => {
    ''
};

