const App = () => {
return <div>
  <Navbar /> 
</div>
};

const Navbar = () => {
  return (
  <div className="flex p-4 border rounded-2xl mt-2 bg-gray-50 hover:bg-gray-100 container max-w-screen-lg mx-auto justify-between items-center">
   <h2 className="text-xl text-gray-800 font-semibold">Hello Search!</h2>
    <Searchbar />
   <img
   className="h-12 rounded-full"
   src="https://lh3.googleusercontent.com/ogw/AF2bZyjP5B6eLpjYhuKFlAg-dMNINdq0cP5K-kqOFbepQwvDSA=s32-c-mo"></img>
  </div>
  )
}

const Searchbar = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <input 
        type="text" 
        placeholder="Search Movies, Series..." 
        className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
        Search!
      </button>
    </div>
  );
};

export default App;