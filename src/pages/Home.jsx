import { useState, useEffect } from "react";

import CategorySlider from "../components/categoryslider/CategorySlider";
import ItemsPreview from "../components/itemsPreview/ItemsPreview";

export default function Home() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState("");
  const [categoryClicked, setCategoryClicked] = useState(false);

  const resetCategory = () => {
    setCategory("")
    getAllItems()
  }

  const handleCategoryClick = (e) => {
    const category = e.target.innerText;
    setCategory(category);
    categoryClicked ? resetCategory() : getCategoryItems(category)
    setCategoryClicked(!categoryClicked);
  }

  const getAllItems = () => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  };

  const getAllCategories = () => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getCategoryItems = (category) => {
    fetch(`http://localhost:5000/products?category=${category}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  };

  useEffect(() => {
    getAllItems();
    getAllCategories();
  }, []);

  return (
    <>
      <CategorySlider categories={categories} handleClick={handleCategoryClick} categoryClicked={categoryClicked} category={category} />
      <ItemsPreview items={items} />
    </>
  );
}
