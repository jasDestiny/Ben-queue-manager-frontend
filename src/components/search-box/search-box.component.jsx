import React from "react";
import "./search-box.styles.scss";

function SearchBox({ handleChange }) {
  return (
    <form>
      <input
        class="search"
        type="search"
        placeholder="Search service providers"
        aria-label="Search"
        onChange={handleChange}
      />
      <button class="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBox;
