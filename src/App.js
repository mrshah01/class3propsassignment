import React ,{useState} from 'react';
import Message from './message';
import './App.css';

function App() {
  let [count,setCount]=useState(0)
  let [isMorning,setMorning]=useState(false)
  return (
    <div className={`box ${isMorning?'daylight':''}`}>
     <Message counter={count}/>
  <h1>Have a good {isMorning? 'Day':'Night'}</h1>
     <br/>
     <button onClick={()=>setCount(++count)}> update count</button>
     <button onClick={()=>setMorning(!isMorning)}> update day</button>
    </div>
  );
}

export default App;
