import React from "react";
import "./search-box.styles.scss";

function SearchBox({ handleChange }) {
  return (
    <form className='search-box'>
      <input
        class="search"
        type="search"
        placeholder="Search service providers"
        aria-label="Search"
        onChange={handleChange}
      />
      <button class="btn btn-outline-success btn-search" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBox;
