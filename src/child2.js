import React,{useReducer} from 'react'
import CounterReducer from './CounterReducer';
import counterReducer from './CounterReducer';

export default function Child2() {
    let [state,dispatch]=useReducer(CounterReducer,1);
    //console.log(state);
    return (
        <div>
            <h1>This is second child using reducer</h1>
            <h2>value of reducer state is : {state}</h2>
            <button onClick={()=>dispatch('INCREMENT')}>inc reducer</button>
        </div>
    )
}
