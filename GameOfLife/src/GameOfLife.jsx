import './App.css'

import   { useState } from 'react';

function MyCom() {
    const [grid, setGrid] = useState([1,0,1,1,0,2]);

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
        style.backgroundColor = (grid[j] == 0 ? "white" : grid[j] == 1 ? "orange" : "green")

        squares.push(
            <span style={ {...style} }></span>
        )
    }

    for (let i = 0; i < grid.length; i++) {
        rows.push(<div>{squares}</div>)
    }


    return (
        <div>
            {rows}
        </div>
    )
}


function GameOfLife() {
    return (
        <main>
            <MyCom />       
        </main>
    )
}

export default GameOfLife;  