import React from "react";
import "./CategoryCoins.css";
import Card from "../Card/Card";

const CategoryCoins = () => {
  const categories = [
    {
      id:1,
      name: "Bullion coins",
      img: "Bullion_coins",
    },
    {
      id:2,
      name: "Exclusive coins",
      img: "Exclusive_coins",
    },
    {
      id: 3,
      name: "Commemorative coins",
      img: "Commemorative_coins",
    },
  ];

  return (
    <div className="coins">
      {
        categories.map((category,index)=>{
          return <Card key= {index} text= {category}/>
        })
      }
    </div>
  );
};

export default CategoryCoins;
