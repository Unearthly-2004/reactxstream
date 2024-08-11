import Searchbar from "./Searchbar";
const Navbar = () => {
  console.log("Navbar re-renders");    
  return (
    <div className="flex p-4 border rounded-2xl mt-2 bg-gray-50 hover:bg-gray-100 container max-w-screen-lg mx-auto justify-between items-center">
     <h2 className="text-xl text-gray-800 font-semibold">Hello Search!</h2>
      <Searchbar />
     <img
     className="h-12 rounded-full"
     src="https://lh3.googleusercontent.com/ogw/AF2bZyjP5B6eLpjYhuKFlAg-dMNINdq0cP5K-kqOFbepQwvDSA=s32-c-mo"></img>
    </div>
    )
  };

  export default Navbar;
   // default export -- > you can use this,
   // if used export before declaring the arrow function.

   // here the navbar is the parent component,
   // of searchbar