import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Account from './pages/Account'

import SearchBar from './components/searchbar/SearchBar'
import Navbar from './components/navbar/Navbar'


function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/items')
      .then(res => res.json())
      .then((data) => setItems(data))
  }, [])



  return (
    <>
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home items={items} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
