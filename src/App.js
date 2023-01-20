import { useState, useEffect } from 'react'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Account from './pages/Account'

import SearchBar from './components/searchbar/SearchBar'
import ItemsPreview from './components/itemsPreview/ItemsPreview'
import Navbar from './components/navbar/Navbar'


function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/items')
      .then(res => res.json())
      .then((data) => setItems(data))
  }, [])

  let Component // when using custom Component to render out by name use capital letter (otherwise will try to render normal HTML element)

  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/cart":
      Component = Cart
      break
    case "/account":
      Component = Account
      break
    default:
  }

  return (
    <>
      <SearchBar />
      <Component />
      {/* <ItemsPreview items={items} /> */}
      <Navbar />
    </>
  );
}

export default App;
