import React from 'react'
import { useSelector } from 'react-redux'


export default function Show() {

    const counter = useSelector(state => state.counter)
    
    return (
        <div>
            <h1>{counter}</h1>
            <h1>{id}</h1>
        </div>
    )
}
