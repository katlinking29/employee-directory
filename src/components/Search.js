import React from "react";
import "../styles/search.css";


function Search(props) {
  return (
    <div className="search">
    <form className="form-inline">
        <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Employee Name"
            value={props.value}
            name="search"
            onChange={props.handleInputChange}
        />
        <button 
            className="btn my-2 my-sm-0" 
            type="submit"
            onClick={props.handleSearch}
            >
            Search
         </button>
    </form>
    </div>
);
}

export default Search;