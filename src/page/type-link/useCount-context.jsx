import React,{useMemo, useReducer, useContext} from 'react'

const initialState = {count: 0};

const CountContext = React.createContext();

function CountProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = useMemo(() => [state, dispatch],[state])
    return <CountContext.Provider value={value} {...props} />
}


function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

function Counter() {
    const context = useContext(CountContext);
    const [state, dispatch] = context;

    const increment = () => {dispatch({type: 'increment'})}
    const decrement = () => {dispatch({type: 'decrement'})}

    return {
        state,
        increment,
        decrement
    }
}

export {CountProvider, Counter}
