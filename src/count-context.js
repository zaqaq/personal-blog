import React from 'react'

const CountContext = React.createContext()

const CountProvider = (props) => {
    const [state, dispatch] = React.useReducer(counterReducer, {count: 0})
    const value = React.useMemo(() => [state, dispatch], [state])
    return <CountContext.Provider value={value} {...props} />
}
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

const useCount = () => {
    const context = React.useContext(CountContext)
    if (!context) {
        throw new Error(`useCount must be used within a CountProvider`)
    }
    const [state, dispatch] = context
    const increment = () => dispatch({type: 'INCREMENT'})
    const decrement = () => dispatch({type: 'DECREMENT'})
    return {
        state,
        dispatch,
        increment,
        decrement
    }
}

export {CountProvider, useCount}
