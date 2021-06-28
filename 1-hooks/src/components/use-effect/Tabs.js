import React, { useState, useEffect } from 'react'

function Tabs() {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState()

    useEffect(() => {
        console.log('Called every time when render is called')
    })

    useEffect(() => {
        console.log('Called @ mount')
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType])

    return (
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
            {items && items.map && items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </>
    )
}

export default Tabs
