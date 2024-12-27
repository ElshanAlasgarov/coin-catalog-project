import React, {  useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCoinsByInputRequest } from "../../redux/coinsSlice";
import EditCard from "../EditCard/EditCard";
import "./AdminPanel.css"
const AdminPanel = () => {
  const { coins } = useSelector((store) => store.coins);
  const dispatch = useDispatch();

  const searchName = useRef();
  const handleClick = () => {
    searchName.current.value.trim() !== ""
      ? dispatch(getCoinsByInputRequest(searchName.current.value.trim()))
      : "";
      console.log(searchName.current.value.trim(),asda)
  };
  return (
    <div className="admin-panel">
      <Link className="link" to={`/`}>
        Back Home
      </Link>
      <h1>Admin panel</h1>
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
      {coins.length !== 0 ? (
        coins.map((coin) => {
          return <EditCard key={coin.CoinId} data={coin} />;
        })
      ) : (
        <p>Nəticə tapılmadı...</p>
      )}
      <div className="add-coin">
        <div className="logo">
          <div className="plus">+</div>
        </div>
        <Link className="link" to={`/AdminPanel/edit/add`}>Add new coin</Link>
      </div>
    </div>
  );
};

export default AdminPanel;
