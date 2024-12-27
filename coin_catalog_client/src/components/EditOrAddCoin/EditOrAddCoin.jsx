import React, { useEffect, useState } from "react";
import "./EditOrAddCoin.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCoin, updateCoin, updateCoinState } from "../../redux/coinsSlice";
const EditOrAddCoin = () => {
  const navigate = useNavigate();
  const { coins } = useSelector((store) => store.coins);

  const { name } = useParams();
  console.log(name);

  console.log(coins);
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    name !== "add"
      ? coins.map((coin) => {
          coin.CoinName == name ? setData(coin) : "";
        })
      : "";
  }, [name]);

  console.log(data);
  return (
    <div>
      <Link className="link" to={`/AdminPanel`}>
        Back Admin Panel
      </Link>
      <h1>Admin Panel</h1>
      <div className="set-coin">
        <div className="left">
          <div>
            <label htmlFor="name">Coin name</label>
            <br />
            <input
              value={data.CoinName}
              onChange={(e) => setData({ ...data, CoinName: e.target.value })}
              name="name"
              type="text"
              id="name"
              required
            />
          </div>
          <div>
            <label htmlFor="denomination">Face value</label>
            <br />
            <input
              value={data.Denomination}
              onChange={(e) =>
                setData({ ...data, Denomination: e.target.value })
              }
              name="denomination"
              type="text"
              id="denomination"
              required
            />
          </div>
          <div>
            <label htmlFor="year">Year of issue</label>
            <br />
            <input
              value={data.year}
              onChange={(e) => setData({ ...data, year: e.target.value })}
              name="year"
              type="number"
              id="year"
              required
            />
          </div>
          <div>
            <label htmlFor="price">Price </label>
            <br />
            <input
              value={data.Price}
              onChange={(e) => setData({ ...data, Price: e.target.value })}
              name="price"
              type="number"
              id="price"
              required
            />
          </div>

          <div>
            <label htmlFor="country">Country </label>
            <br />
            <input
              value={data.IssuingCountry}
              onChange={(e) =>
                setData({ ...data, IssuingCountry: e.target.value })
              }
              name="country"
              type="text"
              id="country"
              required
            />
          </div>

          <div>
            <label htmlFor="metal">Metal </label>
            <br />
            <input
              value={data.Composition}
              onChange={(e) =>
                setData({ ...data, Composition: e.target.value })
              }
              name="metal"
              type="text"
              id="meatal"
              required
            />
          </div>
        </div>
        <div className="middle">
          <div>
            <label htmlFor="description">Description</label>
            <br />
            <textarea
              value={data.CoinAbout}
              onChange={(e) => setData({ ...data, CoinAbout: e.target.value })}
              id="description"
              name="description"
              rows="4"
              cols="50"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="quality">Quality of the coin</label>
            <br />
            <input
              value={data.Quality}
              onChange={(e) => setData({ ...data, Quality: e.target.value })}
              name="quailty"
              type="text"
              id="quality"
              required
            />
          </div>
          <div>
            <label htmlFor="weight">Weight</label>
            <br />
            <input
              value={data.Weight}
              onChange={(e) => setData({ ...data, Weight: e.target.value })}
              name="weight"
              type="number"
              id="weight"
              required
            />
          </div>
          <div className="save-and-cancel">
            <button
              onClick={() => {
                if (data.CoinId) {
                  dispatch(updateCoin(data));
                  dispatch(updateCoinState(data));
                } else {
                  dispatch(addCoin(data));
                }
                navigate(`/AdminPanel`);
              }}
              className="btn-save"
            >
              Save
            </button>
            <button
              onClick={() => navigate(`/AdminPanel`)}
              className="btn-cancel"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditOrAddCoin;
