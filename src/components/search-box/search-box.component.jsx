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
    </form>
  );
}

export default SearchBox;
