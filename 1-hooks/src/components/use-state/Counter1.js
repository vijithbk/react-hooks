import React, { useState } from 'react'

function Counter1() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div>Counter1</div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    )
}

export default Counter1
