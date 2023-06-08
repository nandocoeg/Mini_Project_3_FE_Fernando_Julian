import React, { useState } from "react";
import { Input } from "../../Atoms/Input";
import { BsSearch } from "react-icons/bs";

export const SearchForm = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    onSubmit(searchTerm);
  };

  const handleSearch = (e) => {
    console.log("Search term:", searchTerm);
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row justify-center gap-4 items-center">
        <Input value={searchTerm} onChange={handleSearch} />
        <div className="text-xl font-black">
          <button type="submit">
            <BsSearch />
          </button>
        </div>
      </div>
    </form>
  );
};
