import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Account from "./pages/Account";

import Item from "./components/item/Item";

import SearchBar from "./components/searchbar/SearchBar";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState("");
  const [categoryClicked, setCategoryClicked] = useState(false);

  const searchItems = (searchTerm) => {
    fetch(`http://localhost:5000/items?q=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  };

  function resizeInput(e) {
    e.target.style.width = (e.target.value.length + 1) * 8 + "px";
  }

  const handleInputChange = (e) => {
    e.preventDefault();
    resizeInput(e);
    setCategory("");
    const searchTerm = e.target.value;
    // setSearchTerm(e.target.value);
    searchItems(searchTerm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const resetCategory = () => {
    setCategory("");
    getAllItems();
  };

  const handleCategoryClick = (e) => {
    const category = e.target.innerText;
    setCategory(category);
    categoryClicked ? resetCategory() : getCategoryItems(category);
    setCategoryClicked(!categoryClicked);
  };

  const getAllItems = () => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  };

  const getAllCategories = () => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getCategoryItems = (category) => {
    fetch(`http://localhost:5000/items?category=${category}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  };

  useEffect(() => {
    getAllItems();
    getAllCategories();
  }, []);

  return (
    <>
      <SearchBar onChange={handleInputChange} onSubmit={handleSubmit} />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              categories={categories}
              category={category}
              handleCategoryClick={handleCategoryClick}
              categoryClicked={categoryClicked}
              items={items}
            />
          }
        />
        <Route path='/:id' element={<Item />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/account' element={<Account />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
