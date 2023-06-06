import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    console.log("searchTerm:", searchTerm);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
        className="py-2 px-4 pr-10 bg-gray-200 text-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
