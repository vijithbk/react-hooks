import React, { useState } from 'react'

function Counter4() {
    const [count, setCount] = useState(4)
    const [theme, setTheme] = useState('blue')

    function increment() {
        setCount(prevState => prevState + 1)
        setTheme('blue')
    }

    function decrement() {
        setCount(prevState => prevState - 1)
        setTheme('red')
    }

    return (
        <div>
            <div>Counter4</div>
            <button onClick={increment}>+</button>
            <span>{count}{theme}</span>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter4
