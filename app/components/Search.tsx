"use client";

import { useState } from "react";

type SearchProps = {
  setCity: (city: string) => void; // function from parent to update city
};

const Search = ({ setCity }: SearchProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return; // ignore empty input
    setCity(input); // call parent function
    setInput(""); // clear input after submit
  };

  return (
    <section className="searchSection">
      <h1>Weather App</h1>
      <form className="searchSectionBox" onSubmit={handleSubmit}>
        <input
          type="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default Search;
