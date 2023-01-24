import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Account from './pages/Account'

import Item from './components/item/Item'
// import ItemsPreview from './components/itemsPreview/ItemsPreview'

import SearchBar from './components/searchbar/SearchBar'
import Navbar from './components/navbar/Navbar'


function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const searchProducts = (searchTerm) => {
    fetch(`http://localhost:3000/products?title=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setItems(data))
  }

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value)
    searchProducts(searchTerm);
  }

  return (
    <>
      <SearchBar onChange={handleInputChange} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Item />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
