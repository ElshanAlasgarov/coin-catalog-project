import React, { useEffect, useRef, useState } from "react";
import "./AdvancedFilter.css";
import { useDispatch } from "react-redux";
import { getCoinsAdvancedFilter } from "../../redux/coinsSlice"; 
import { useNavigate } from "react-router-dom";

const AdvancedFilter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [request, setRequest] = useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setRequest({ ...request, [e.target.name]: e.target.value });
  };

  const handleChangePrice = (e) => {
    setRequest({
      ...request,
      price: { ...request.price, [e.target.name]: e.target.value },
    });
  };
  const handleChangeYear = (e) => {
    setRequest({
      ...request,
      year: { ...request.year, [e.target.name]: e.target.value },
    });
  };
  return (
    <div className="filter-search">
      <div className="advanced-filter">
        <p className="detail" onClick={() => setIsVisible(!isVisible)}>
          Advanced filter
        </p>
        {isVisible ? <i>˄</i> : <i>˅</i>}
      </div>
      {isVisible && (
        <>
        <button onClick={()=>{
          navigate(`/categories/${request.name}`)
          dispatch(getCoinsAdvancedFilter(request))}}>Advanced Search</button>
          <div className="advanced-filter-zone">
            <div className="left">
              <div className="country">
                <label htmlFor="country">Issuing country</label>
                <br />
                <select onChange={handleChange} name="country" id="country">
                  <option value=""></option>
                  <option value=" the Weimar Republic">
                    the Weimar Republic
                  </option>
                  <option value="Australia">Australia</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Botswana">Botswana</option>
                  <option value=" British South Africa">
                    British South Africa
                  </option>
                  <option value="British Virgin Islands">
                    British Virgin Islands
                  </option>
                  <option value="CANADA">CANADA</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Estonia">Estonia</option>
                  <option value="France">France</option>
                  <option value="Ghana">Ghana</option>

                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Iran">Iran</option>
                  <option value="Portugal">Portugal</option>

                  <option value="the Belgian Congo">the Belgian Congo</option>
                  <option value="the Republic of Vietnam">
                    the Republic of Vietnam
                  </option>
                  <option value="UNITED STATES OF AMERICA">
                    UNITED STATES OF AMERICA
                  </option>
                  <option value="Yemen">Yemen</option>
                </select>
              </div>
              <div className="metal">
                <label htmlFor="metal">Metal</label>
                <br />

                <select onChange={handleChange} name="metal" id="metal">
                  <option></option>
                  <option value="gold">gold</option>
                  <option value="nickel">nickel</option>
                  <option value="silver">silver</option>
                  <option value="steel">steel</option>
                </select>
              </div>
              <div className="quality">
                <label htmlFor="quality">Quality of the coin</label>
                <br />
                <select onChange={handleChange} name="quality" id="quality">
                  <option></option>
                  <option value="BU">BU</option>
                </select>
              </div>
            </div>
            <div className="right">
              <div className="price">
                <label htmlFor="quality">Price</label>
                <div className="from-to">
                  <label htmlFor="from">From</label>
                  <input
                    name="from"
                    onChange={handleChangePrice}
                    type="number"
                    id="from"
                  />
                  <label htmlFor="to">to</label>
                  <input
                    name="to"
                    onChange={handleChangePrice}
                    type="number"
                    id="to"
                  />
                </div>
              </div>
              <div className="year">
                <label htmlFor="quality">Year of issue</label>
                <div className="from-to">
                  <label htmlFor="from">From</label>
                  <input
                    name="from"
                    onChange={handleChangeYear}
                    type="number"
                    id="from"
                  />
                  <label htmlFor="to">to</label>
                  <input
                    name="to"
                    onChange={handleChangeYear}
                    type="number"
                    id="to"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdvancedFilter;
