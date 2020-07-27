import React, { useState } from "react";
import Parent from "./parent";
import "./App.css";
import CounterContext from "./CounterContext";

function App() {
  let countState=useState(1);//[count,setCount]

  return (
   <CounterContext.Provider value={countState}>
      <div className="">
        <Parent />
      </div>
   </CounterContext.Provider>
  );
}

export default App;
