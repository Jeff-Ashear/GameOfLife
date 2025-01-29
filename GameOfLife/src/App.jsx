import { useState } from 'react'
import './App.css'
import GameOfLife from './GameOfLife';

function App() {
  return (
    <>
      <div className='header'>
        <h2>Conway's Game of Life</h2>
      </div>
      <div className="card">
        <GameOfLife />
      </div>
    </>
  )
}                           

export default App
