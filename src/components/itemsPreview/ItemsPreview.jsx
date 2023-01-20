import React from 'react'

import './itemsPreview.scss'

import ItemPreview from '../itemPreview/ItemPreview'

function ItemsPreview({items}) {
  return (
    <div className="itemsPreview-container">
      {items.map((item) => {
        return <ItemPreview item={item} key={item.id} />
      })}
    </div>
  )
}

export default ItemsPreview
