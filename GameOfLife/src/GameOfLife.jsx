import './App.css'

import   { useState } from 'react';

function GridGen() {
 
    const [grid, setGrid] = useState([20].fill(0));
    const [isAlive, setIsAlive] = useState(false);


    
    let squares = []
    let rows = []

    const style = {
        backgroundColor: "white",
        width: "30px",
        height: "30px",
        // display: "grid",
        border: "1px solid black",
        marginTop: "-10px",
        marginBottom: "-10px"
    }

    function handleClick( key ) {
    
        console.log("click", key)
        // console.log(key)
        style.backgroundColor = "orange"
    }
    
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < grid.length; j++) {
            
            style.backgroundColor = (grid[j] == 0 ? "white" :  "orange")

            squares.push(
                // <span style={ {...style} }></span>
                <div key={`${i}${j}`} style={ {...style} } onClick={() => handleClick( key )}></div>
            )
        }
    
        rows.push(<div>{squares}</div>)
    }

    return (
        <>
            <div className='board, grid'>
                {rows}
            </div>
            <div className='controls'>
                {/* <button onClick={}>Randomize</button> */}
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