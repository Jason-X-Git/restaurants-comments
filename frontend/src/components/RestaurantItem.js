import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const RestaurantItem = ({ id, english_name, chinese_name, address, phone, introduction,
  hours }) => (
    <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h2>{english_name}</h2>
      <p>{chinese_name}</p>
      <p>{address}</p>
      <p>{phone}</p>
      <p>{introduction}</p>
      <p>{hours}</p>
      
      <hr />
    </div>
  </Link>
);

export default RestaurantItem;
