import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "../DetailsPage/DetailsPage.css";
const DetailsPage = () => {
  const { name } = useParams();
  console.log(name);
  const { coins } = useSelector((store) => store.coins);
  let data;

  coins.map((coin) => {
    coin.CoinName == name ? (data = coin) : "";
  });

  return (
    <>
      {data ? (
        <div className="details">
          <div className="left">
            <div className="img-1">
              <img src={`/assets/images/${data.CoinName}_1.png`} alt="photo_1" />
            </div>
            <div className="img-2">
              <img src={`/assets/images/${data.CoinName}_2.png`} alt="photo_2" />
            </div>
          </div>
          <div className="right">
            <div className="content">
              <h1>{data.CoinName}</h1>
              <br />
              <p>{data.CoinAbout}</p>
              <table>
                <tbody>
                  <tr>
                    <td>Issuing Country</td>
                    <td>{data.IssuingCountry}</td>
                  </tr>
                  <tr>
                    <td>Composition</td> 
                    <td>{data.Composition}</td>
                  </tr>
                  <tr>
                    <td>Quality</td> 
                    <td>{data.Quality}</td>
                  </tr>

                  <tr>
                    <td>Denomination</td>
                    <td>{data.Denomination}</td>
                  </tr>
                  <tr>
                    <td>Year</td>
                    <td>{data.year}</td>
                  </tr>
                  <tr>
                    <td>Weight</td> 
                    <td>{data.Weight}</td>
                  </tr>

                  <tr>
                    <td>Price</td>
                    <td>{data.Price}$</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Link to={`/`}>Back to the list</Link>
          </div>
        </div>
      ):<Link to={`/`}>Back to the list</Link>}
    </>
  );
};

export default DetailsPage;
