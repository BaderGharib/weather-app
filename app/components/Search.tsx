"use client";

type Props = {};

const Search = (props: Props) => {
  return (
    <section className="searchSection">
      <h1>Weather App</h1>
      <div className="searchSectionBox">
        <input type="search" placeholder="Enter city name" />
        <button>Search</button>
      </div>
    </section>
  );
};

export default Search;
