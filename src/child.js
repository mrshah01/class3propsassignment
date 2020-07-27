import React, { useContext } from "react";
import counterContext from "./CounterContext";

export default function Child() {
  let counterValue = useContext(counterContext);
  console.log(counterValue);
  return (
    <div>
      <h1>this is first child using context api</h1>
      <h2>counter value is : {counterValue[0]}</h2>
      <button onClick={()=>counterValue[1](++counterValue[0])}>inc context</button>
    </div>
  );
}
