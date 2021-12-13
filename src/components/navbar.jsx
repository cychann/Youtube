import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-left">
          <img src="images/logo.png" alt="" />
          <span className="logo-name">Youtube</span>
        </div>
        <div className="navbar-right">
          <input type="text" placeholder="Search.." className="search-input" />
          <img src="images/search.png" alt="" className="input-search" />
        </div>
      </div>
    );
  }
}

export default Navbar;
