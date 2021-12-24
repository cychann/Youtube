import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = (props) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    props.onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <img className={styles.logo} src="images/logo.png" alt="" />
      <span className={styles.title}>YouTube</span>
      <input
        className={styles.input}
        type="text"
        placeholder="Search.."
        ref={inputRef}
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} onClick={onClick}>
        <img className={styles.search} src="images/search.png" alt="" />
      </button>
    </header>
  );
};

export default SearchHeader;
