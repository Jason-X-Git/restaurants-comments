import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const RestaurantItem = ({ id, english_name, chinese_name, address, phone, introduction,
  hours }) => (
    <Link className="list-item" to={`/edit/${id}`}>
    <div>
        <h2 className="list-item__title">{english_name}</h2>
        <p className="list-item__sub-title">{chinese_name}</p>
        <p className="list-item__data">{address}</p>
        <p className="list-item__data">{phone}</p>
        <p className="list-item__data">{introduction}</p>
        <p className="list-item__data">{hours}</p>
      
    </div>
  </Link>
);

export default RestaurantItem;
