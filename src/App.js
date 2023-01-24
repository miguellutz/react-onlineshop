import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Account from './pages/Account'

import Item from './components/item/Item'
// import ItemsPreview from './components/itemsPreview/ItemsPreview'

import SearchBar from './components/searchbar/SearchBar'
import Navbar from './components/navbar/Navbar'


function App() {

  return (
    <>
      <SearchBar />
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
