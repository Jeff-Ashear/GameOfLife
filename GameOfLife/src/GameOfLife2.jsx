import './App.css'

import   { useState } from 'react';

function GridGen() {
 
    const [grid, setGrid] = useState([0,0,0,0,0,0]);
    let colorNum = 0
    let colorGrid = 0

    
    let squares = []
    let rows = []

    const style = {
        backgroundColor: "white",
        width: "10px",
        height: "55px",
        display: "inline-block",
        border: "1px solid black",
        borderRadius: "0px",
        marginTop: "-10px",
        marginBottom: "-10px"
    }

    function handleClick() {
        if (grid)
        console.log("click")
    // click a button to change it's color.
        style.backgroundColor = "orange"
    }
    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < grid.length; j++) {
            // let num = Math.round(Math.random())
            
            style.backgroundColor = (grid[j] == 0 ? "white" :  "orange")

            squares.push(
                // <span style={ {...style} }></span>
                <button style={ {...style} } onClick={() => handleClick()}></button>
            )
        }
    
        rows.push(<div>{squares}</div>)
    }

    return (
        <>
            <div className='board'>
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