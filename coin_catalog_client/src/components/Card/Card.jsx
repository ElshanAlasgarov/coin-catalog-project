import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
const Card = ({ text }) => {

  return (
    <>
      <div className="card">
        <h3>{text.name}</h3>
        <Link to={`/categories/${text.id}`}>Show all </Link>
        <div className="image">
          <img src={`./assets/images/${text.img}_1.png`} alt="" />
        </div>
      </div>
    </>
  );
};

export default Card;