import React from 'react'
import * as Creators from '../redux/ActionCreators'
import { useDispatch } from 'react-redux'

export default function Operations() {

    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => dispatch(Creators.increment(2))}>INCREMENTER</button>
        <button onClick={() => dispatch(Creators.decrement(3))}>DECREMENTER</button>
        <button onClick={() => dispatch(Creators.init())}>INIT</button>
    </div>
  )
}
