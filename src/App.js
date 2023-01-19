import { useState, useEffect } from 'react'

import AppBar from './components/appBar/AppBar'
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
      <AppBar />
      <ItemsPreview items={items} />
    </>
  );
}

export default App;
