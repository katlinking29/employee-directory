import React from 'react';
import Search from "./Search";
import "../styles/navbar.css";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

       <div className="search-area col-4">
        <Search />
    </div>
</nav>
    );
}
export default NavBar;