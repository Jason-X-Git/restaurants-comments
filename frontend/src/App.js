import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    restaurants: [],
    isLoading: true,
    errors: null
  };

  getRestaurants() {
    // axios
    //   .get('http://localhost:8001/api/restaurants/')
    //   .then(response => console.log(response))
    //   .catch(error => this.setState({ error, isLoading: false }));
    axios.get('http://localhost:8001/api/restaurants/')
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
        console.log(restaurants[0])
        this.setState({
          restaurants,
          isLoading: false
        })
      })
      .catch(error => this.setState({ error, isLoading: false }));

  }

  componentDidMount() {
    this.getRestaurants();
  }

  render() {
    const { isLoading, restaurants } = this.state;
    return (
      <React.Fragment>
        <h1>All Restaurants</h1>
        <div>
          {!isLoading ? (
            restaurants.map(restaurant => {
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
                  {comments.length > 0?
                  (<div> 
                      <h3>{comments.length} Comments</h3>
                    {comments.map(comment => <p>{comment.title}: {comment.content}</p>)}
                  </div>)
                  : <h3>No comments</h3>
                  }
                  <hr />
                </div>
              );
            })
          ) : (
              <p>Loading...</p>
            )}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
