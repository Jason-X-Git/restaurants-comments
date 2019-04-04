import React from 'react';
import { connect } from 'react-redux';

export const RestaurantsList = (props) => (
    <div>
        {props.restaurants.length > 0 ? (
            props.restaurants.map(restaurant => {
                const { id: restaurant_id, english_name, chinese_name, address, phone, introduction,
                    hours, comments } = restaurant;
                return (
                    <div key={restaurant_id}>
                        <h2>{english_name}</h2>
                        <p>{chinese_name}</p>
                        <p>{address}</p>
                        <p>{phone}</p>
                        <p>{introduction}</p>
                        <p>{hours}</p>
                        {comments.length > 0 ?
                            (<div>
                                <h3>{comments.length} Comments</h3>
                                {comments.map(comment => <p key={comment.url}>{comment.title}: {comment.content}</p>)}
                            </div>)
                            : <h3>No comments</h3>
                        }
                        <hr />
                    </div>
                );
            })
        ) : (
                <p>No restaurants extracted...</p>
            )}
    </div>
);

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants
    };
};

export default connect(mapStateToProps)(RestaurantsList);
