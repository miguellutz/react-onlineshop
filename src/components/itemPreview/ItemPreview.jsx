import React from "react";
import { Link } from "react-router-dom";

import "./itemPreview.scss";

function Item({ item }) {
  return (
    <Link to={`/${item.id}`} className='item-link'>
      <div className='itempreview-container' key={item.id}>
        <div className='item-image'>
          <img src={item.image} alt={item.title} />
        </div>
        <div className='item-content'>
          <h1 className='item-title'>{item.title}</h1>
          <p className="item-category">{item.category}</p>
          <p className="item-price">{item.price}€</p>
          {/* <div className="item-rating">
            <p className="item-rating__rate">{item.rating.rate}</p>
            <p className="item-rating__count">{item.rating.count}</p>
          </div> */}
        </div>
      </div>
    </Link>
  );
}

export default Item;
