import React, { useState } from "react";
import { Input } from "../../Atoms/Input";

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
      <Input value={searchTerm} onChange={handleSearch} />
      <button type="submit">Search</button>
    </form>
  );
};
