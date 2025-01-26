import './App.css'

import   { useState } from 'react';

function GridGen() {
 
    const [grid, setGrid] = useState([1,0,1,1,0,0]);
    let colorNum = 0
    let colorGrid = 0

    
    let squares = []
    let rows = []

    const style = {
        backgroundColor: "white",
        width: "30px",
        height: "30px",
        display: "inline-block",
        border: "1px solid black",
        marginTop: "-10px",
        marginBottom: "-10px"
    }
    
    for (let j = 0; j < grid.length; j++) {



        
        style.backgroundColor = (grid[j] == 0 ? "white" :  "orange")

        squares.push(
            <span style={ {...style} }></span>
        )
    }
    

    for (let i = 0; i < grid.length; i++) {
        rows.push(<div>{squares}</div>)
    }


    return (
        <>
            <div className='board'>
                {rows}
            </div>
            <div className='controls'>
                <button onClick={}>Randomize</button>
            </div>
        </>
    )
}


function GameOfLife() {
    return (
        <main>
            <GridGen />       
        </main>
    )
}

export default GameOfLife;  