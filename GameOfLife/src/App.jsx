import { useState } from 'react'
import './App.css'
import GOL from './GOL';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='App-Header'>
        <h1>Conway's Game of Life</h1> 
        <GOL />     
      </header>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
