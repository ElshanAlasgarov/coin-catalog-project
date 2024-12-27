import React from "react";
import "./Homepage.css";
import Header from "../../components/Header/Header";
import CategoryCoins from "../../components/Category-coins/CategoryCoins";

const Homepage = () => {
  return (
    <div className="wrapper">
       <h1>Homepage</h1>
      <Header/>     
      <CategoryCoins />
    </div>
  );
};

export default Homepage;
