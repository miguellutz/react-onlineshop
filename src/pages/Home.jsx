import { useState, useEffect } from 'react'

import CategorySlider from '../components/categoryslider/CategorySlider';
import ItemsPreview from '../components/itemsPreview/ItemsPreview'

export default function Home() {

  const [items, setItems] = useState([])

  const getAllItems = () => {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then((data) => setItems(data))
  }

  const getCategoryItems = (category) => {
    fetch(`http://localhost:5000/products?category=${category}`)
    .then((res) => res.json())
    .then((data) => setItems(data))
  }

  useEffect(() => {
    getAllItems()
  }, [])

  return (
    <>
      <CategorySlider />
      <ItemsPreview items={items} />
    </>
  );
}
