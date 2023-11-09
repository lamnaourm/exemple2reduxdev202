import * as Types from './ActionTypes'

export const increment = (pas) =>{
    return {
        type: Types.INCREMENT,
        payload:pas
    }
}

export const decrement = (pas) =>{
    return {
        type: Types.DECREMENT,
        payload:pas
    }
}

export const init = () =>{
    return {
        type: Types.INIT
    }
}