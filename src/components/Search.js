import React, { useContext } from "react";
import "../styles/search.css";
import EmployeeContext from "../utils/EmployeeContext";


function Search() {
    const context = useContext(EmployeeContext);
  return (
    <div className="search">
    <form className="form-inline">
        <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Employee Name"
            aria-label="Search"
            onChange={e => context.handleSearchChange(e)}
        />
        <button className="btn my-2 my-sm-0" type="submit">
            Search
         </button>
    </form>
    </div>
);
}

export default Search;