import Navbar from "./components/Navbar"; // default export --> without curly braces
import { useState } from "react"; // named export --> with curly braces


const App = () => {
//let counter = 0;

const [counter, setCounter] = useState(0);

const handleIncBtn = ()=>{
  setCounter(counter + 1);
  console.log(counter);
};

console.log("re-render");

return (
  <div className="p-18">
  <Navbar /> 
  {counter}
  <br></br>
  <button onClick={handleIncBtn} className="p-1 bg-cyan-300 rounded-xl">Increase</button>
</div>
 );
};


export default App;

//hooks are just javascript functions example useState, useEffect, useMemo etc
// state varibales are special variables in react that trigger a re-render when their value changes
