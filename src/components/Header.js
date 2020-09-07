import React from 'react';
import "../styles/header.css";

function Header () {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Use the search box to search by employee first or last name or click on "name" to sort employees by last name.</p>
      </div>
    )
  }

export default Header;