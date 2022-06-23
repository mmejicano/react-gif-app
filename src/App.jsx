import { useState } from 'react'
import { AddCategory, GifGrid } from './components'


function App() {
  const [categories, setCategories] = useState(['One piece'])

  const handleAdd = (value) => {
    if (categories.includes(value)) return
    setCategories([value, ...categories])
  }
  return (
    <>

      {/* titulo */}
      <h1>Gif app</h1>

      {/* input */}
      <AddCategory
        onNewCategory={e => handleAdd(e)}
      />

      {/* listado de gif */}
      {categories.map((cat) => (<GifGrid key={cat} category={cat} />))}
      {/* gif item */}
    </>
  )
}

export default App
