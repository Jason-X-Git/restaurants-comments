import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const RestaurantItem = ({ id, english_name, chinese_name, address, phone, introduction,
  hours, comments }) => (
    <Link className="list-item" to={`/edit/${id}`}>
    <div>
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
  </Link>
);

export default RestaurantItem;
