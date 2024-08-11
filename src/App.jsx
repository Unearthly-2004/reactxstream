import Navbar from "./components/Navbar"; // default export --> without curly braces
import Counter from "./components/counter"; 
// named export --> with curly braces


const App = () => { // this a parent component of navbar
//let counter = 0;

// its a hook

console.log("App re-render");
// and this navbar component is the child component of App
return (
  <div className="p-18">
  <Navbar />
  <Counter /> 
 </div>
 );
};


export default App;

//hooks are just javascript functions example useState, useEffect, useMemo etc
// state varibales are special variables in react that trigger a re-render when their value changes
// searchbar is the grandchild of app

// whenever the parent component re-renders all its child ,
// grandchilds etc re-renders