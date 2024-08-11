const Searchbar = () => {
  console.log("Search bar re-renders");  
  
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

  export default Searchbar; // default export 