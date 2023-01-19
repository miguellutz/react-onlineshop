import { useState, useEffect } from 'react'

import SearchBar from './components/searchbar/SearchBar'
import ItemsPreview from './components/itemsPreview/ItemsPreview'


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
      <ItemsPreview items={items} />
    </>
  );
}

export default App;
