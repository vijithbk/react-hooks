import React, { useState, useEffect, useRef } from 'react'

export default function PrevState() {
    // useRef can be used to store values in between component renders
    const [name, setName] = useState()
    const prevName = useRef('')

    useEffect(() => {
        prevName.current = name
    }, [name])
    return (
        <div>
            <input onChange={e => { setName(e.target.value) }} />
            <div>My name is {name} and it used to be {prevName.current}</div>
        </div>
    )
}
