import { useState } from 'react';
import './App.css';

function GridGen({cellState}) {
    

    let style = {
        style.backgroundColor: {cellState},     
    }

    console.log(cellState)

    return (
        <div className='grid' style.backgroundColor={cellState}>X</div>
    )
}


function GameOfLife() {
    const [grid, setGrid] = useState([
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ])
    const [isAlive, setIsAlive] = useState(true)

    let cellState = 'white'
    if (isAlive) {
        cellState = 'orange'
    } else {
        cellState = 'white'
    }
    console.log(cellState)
    
    
    // console.log(grid)
    return (
        <>
            <GridGen cellState={cellState} />
        </>
    )
}

export default GameOfLife




