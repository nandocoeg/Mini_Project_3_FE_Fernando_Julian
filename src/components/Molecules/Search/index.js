import React, { useState } from "react";
import { Input } from "../../Atoms/Input";

export const SearchForm = ({ value, onChange, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input value={value} onChange={onChange} />
      <button type="submit">Search</button>
    </form>
  );
};
