import React, {
    useState,
    useCallback,
    useRef
} from 'react';

const numRows = 22;
const numCols = 40;
const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
];


function Grid() {
    const [grid, setGrid] = useState([1])

    let squares  = []

    const style = {
        backgroundColor: "white",
        hieght: "30px",
        width: "30px",  
        display: "inline",
        border: "3px solid black"
    }
    
    for (let i = 0; i < grid.length; i++) {
        // style.backgroundColor = (grid[i] == 0 ? "white" : "orange")

        squares.push(
            <div style={ {...style} }></div>
        )
    }
    
    return (    
            <div>
                {squares}
            </div>

    )
}

function GameOfLife() {
    return (
        <main>
            <Grid />
        </main>
    )
}
export default GameOfLife;
