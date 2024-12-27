import React, { useRef } from "react";
import "./Header.css";
import AdvancedFilter from "../AdvancedFilter/AdvancedFilter";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const searchName = useRef();
  const navigate = useNavigate();
  const handleClick = () => {
    searchName.current.value.trim() !== ""
      ? navigate(`/categories/${searchName.current.value}`)
      : "";
  };
  return (
    <>
      <div className="header">
        <div className="search-form">
          <label htmlFor="search-input">Input field</label>
          <br />
          <input ref={searchName} type="text" id="search-input" />
          <button className="search-button" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
      <AdvancedFilter />
    </>
  );
};

export default Header;
