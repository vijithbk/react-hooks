import React, { useState, useRef } from 'react'

export default function Focus() {
    const [name, setName] = useState('');
    const inputRef = useRef();

    function focus() {
        console.log(inputRef.current)
        inputRef.current.focus()
    }

    return (
        <>
            <input ref={inputRef} type="text" onChange={e => setName(e.target.value)} />
            <div>My name is {name}</div>
            <button onClick={focus}>Set focus</button>
        </>
    )
}
