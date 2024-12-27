import React from "react";
import { Link } from "react-router-dom";
import "../ResultCard/ResultCard.css";
const ResultCard = ({ data }) => {
  return (
    <div className="result-card">
      <h3>{data.CoinName}</h3>
      <Link to={`/categories/${data.CategoryId}/${data.CoinName}`}>Details...</Link>
      <div className="image">
        <img src={`../assets/images/${data.CoinName}_1.png`} alt="" />
      </div>
    </div>
  );
};

export default ResultCard;
