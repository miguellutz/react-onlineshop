import React from 'react'

import ItemPreview from '../itemPreview/ItemPreview'

function ItemsPreview({items}) {
  return (
    <div className="itemsPreview-container">
      {items.map((item) => {
        return <ItemPreview item={item} />
      })}
    </div>
  )
}

export default ItemsPreview
