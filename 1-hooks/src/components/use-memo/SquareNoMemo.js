import React, { useState, useMemo } from 'react'

function Square() {
    const [number, setNumber] = useState(0)
    const square = findSquare(number)

    const [counter, setCounter] = useState(0)

    const onChangeHandler = (e) => {
        setNumber(e.target.value);
    }

    const counterHandler = () => {
        setCounter(counter + 1);
    }

    return (
        <div className="App">
            <h1>useMemo example</h1>
            <input type="number" placeholder="Enter a number" value={number} onChange={onChangeHandler} />
            <div>OUTPUT: {square}</div>

            <button onClick={counterHandler}>Counter ++</button>
            <div>Counter : {counter}</div>
        </div>
    )
}

function findSquare(number) {
    console.log("Squaring will be done!");
    return Math.pow(number, 2);
}

export default Square
