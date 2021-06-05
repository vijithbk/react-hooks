import React, { useState } from 'react'

function Counter3() {
    const [state, setState] = useState({ count: 0, theme: 'blue' })
    const count = state.count
    const theme = state.theme

    function decrement() {
        setState(prevState => {
            return { ...prevState, count: prevState.count - 1 }
        })
    }

    function increment() {
        setState(prevState => {
            return { ...prevState, count: prevState.count + 1 }
        })
    }

    return (
        <div>
            <div>Counter3</div>
            <button onClick={increment}>+</button>
            <span>{count}{theme}</span>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter3
