import { useState } from "react";

const Counter = () =>{
const [counter, setCounter] = useState(0);
const handleIncBtn = ()=>{
  setCounter(counter + 1);
  console.log(counter);
};

console.log("counter re-renders");
    return <div>
    <div>{counter}</div>
  <button onClick={handleIncBtn} className="p-1 bg-cyan-300 rounded-xl">Increase</button>
    </div>;
}

export default Counter;