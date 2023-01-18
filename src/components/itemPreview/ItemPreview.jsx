import React from 'react'
import './itemPreview.scss'

function Item({item}) {
  return (
    <div className="item-container" key={item.id}>
      <div className="item-image">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="item content">
        <h1 className="item-name">
          {item.title}
        </h1>
        <div className="item-rating">
          <p className="item-rating__rate">{item.rating.rate}</p>
          <p className="item-rating__count">{item.rating.count}</p>
        </div>
        <p>{item.price}</p>
      </div>
    </div>
  )
}

export default Item
