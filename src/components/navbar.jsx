import React, { Component } from "react";

class Navbar extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const searchKeyword = this.inputRef.current.value;
    searchKeyword && this.props.onSearch(searchKeyword);
    this.formRef.current.reset();
  };
  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          placeholder="Search.."
          className="search-input"
        />
        <button className="input-search">
          <img src="images/search.png" alt=""></img>
        </button>
      </form>
      // <div className="navbar">
      //   <div className="navbar-left">
      //     <img src="images/logo.png" alt="" />
      //     <span className="logo-name">Youtube</span>
      //   </div>
      //   <div className="navbar-right">

      //   </div>
      // </div>
    );
  }
}

export default Navbar;
