import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import CloseButton from '../utils/closeButton/CloseButton'
import Loading from '../utils/loading/Loading'


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
            <div className="item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="item-content">
              <h1 className="item-title">
                {item.title}
              </h1>
              <div className="item-rating">
                <p className="item-rating__rate">{item.rating.rate}</p>
                <p className="item-rating__count">{item.rating.count}</p>
              </div>
              <p>{item.price}€</p>
              <p className="item-shipping">Kostenlose Lieferung für Prime Mitglieder</p>
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
