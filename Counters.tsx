import React, { useReducer } from 'react';

type State = {count: number};
type Action = {type: 'increment' | 'decrement'; payload?: number};


function reducer (state: State, action: Action){
    switch (action.type){
        case 'increment':
            return{count: state.count+ (action.payload ?? 1)};
            case 'decrement':
                return{count: state.count - (action.payload ?? 1)};
                default:
                    return state;
    }
}
const Counters:React.FC=()=>{
    const [state, setState] = useReducer(reducer, {count: 0});
    return(
        <div>
            <p>Count: {state.count}</p>
            <button onClick={()=> setState({type: 'increment', payload: 5})}>Increment</button>
            <button onClick={()=> setState({type: 'decrement', payload: 2})}>Decrement</button>
        </div>
    )
}

export default Counters;