import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCoinsByCategoryId, getCoinsByInputRequest } from "../../redux/coinsSlice";
import ResultCard from "../../components/ResultCard/ResultCard";
import "./SearchListPage.css";
import Header from "../../components/Header/Header";

const SearchListPage = () => {
  const { coins } = useSelector((store) => store.coins);
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log(id);
  useEffect(() => {
    if (id && id.trim()) {
      const isNumericId = !isNaN(Number(id));
      if (isNumericId) {
        dispatch(getCoinsByCategoryId(id));
      } else {
        dispatch(getCoinsByInputRequest(id));
      }
    }
  }, [id, dispatch]);
  
  return (
    <>
      <h1>List of the coins</h1>
      <Header />
      <div className="search-list-page">
        {coins.length !== 0 ? (
          coins.map((coin) => {
            return <ResultCard key={coin.CoinId} data={coin} />;
          })
        ) : (
          <p>Nəticə tapılmadı...</p>
        )}
      </div>
    </>
  );
};

export default SearchListPage;
