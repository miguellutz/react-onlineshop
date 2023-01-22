import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './item.scss'

import CloseButton from '../utils/closeButton/CloseButton'
import Loading from '../utils/loading/Loading'

import StarRating from '../starrating/StarRating'
import QuantityButton from './QuantityButton'
import AddToCartButton from '../utils/addtocartbutton/AddToCartButton'


export default function Item() {

  const [item, setItem] = useState()

  let { id } = useParams();

  async function fetchItem(id) {
    await fetch(`http://localhost:5000/items/${id}`)
    .then((res) => res.json())
    .then((data) => setItem(data))
  }

  useEffect(() => {
    fetchItem(id);
  }, [])


  return (
    <>
      {item ? (
        <>
          <CloseButton />
          <div className="item-container" key={item.id}>
            <div className="item-rating">
              <div className="item-brand__containter">
                <span className="item-brand">Brand: {item.brand}</span>
              </div>
              <div className="item-rating__container">
                <span className="item-rating__rate"><StarRating item={item} /></span>
                <span className="item-rating__count">({item.rating.count})</span>
              </div>
            </div>
            <div className="item-header">
              <h1>{item.title}</h1>
            </div>
            <div className="item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="item-content">
              <h2>{item.price}€</h2>
              <p className="item-description">{item.description}</p>
            </div>
            <div className="item-actions">
              <QuantityButton />
              <AddToCartButton />
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )
      }

    </>
  )
}
