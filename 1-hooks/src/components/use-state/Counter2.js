import React, { useState } from 'react'

function Counter2() {
    const [count, setCount] = useState(() => {
        console.log(' initial state setting')
        return 4
    })

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div>
            <div>Counter2</div>
            <button onClick={increment}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter2
