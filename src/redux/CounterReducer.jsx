import uuid from 'react-uuid'
import * as Types from './ActionTypes'

const initialState = {
    counter : 200,
}

const CounterReducer = (state = initialState, action) => {
    let newState = {...state}

    switch(action.type){
        case Types.INCREMENT: 
            newState.counter = newState.counter + action.payload
        break;
        case Types.DECREMENT: 
            newState.counter = newState.counter - action.payload
        break;
        case Types.INIT: 
            newState.counter = 0
        break;
    }

    return newState;
}

export default CounterReducer;