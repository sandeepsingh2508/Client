import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

const Client = () => {
  const [resp, setResp] = useState([]);

  function getData() {
    axios
      .get("http://localhost:8080/api/get/")
      .then((response) => setResp(response.data.data.rows));
  }
  const handleClick = () => {
    getData();
  };
  return (
    <>
      <div className={`body`}>
        <div className="container">
          <div className="header">
            <p>
              HODLINFO<spam>.com</spam>
              <br></br>
              <span>
                Powered By <spam>Finstreet</spam>
              </span>
            </p>

            <button onClick={handleClick}>Get Data</button>
            <div className="right">
              <Link to={"https://web.telegram.org/k/"} className="btn">
                <button>Connect Teligram</button>
              </Link>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div className="table">
            <div className="head">
              <ul>
                <li>id</li>
                <li>name</li>
                <li>Last</li>
                <li>Buy/Sell Price</li>
                <li>volume</li>
                <li>base_unit</li>
              </ul>
            </div>

            {resp.map(({ id, name, last, buy, sell, volume, base_unit }) => {
              return (
                <div className="tdata">
                  <ul>
                    <li>{id}</li>
                    <li>{name}</li>
                    <li>{last}</li>
                    <li>{buy / sell}</li>
                    <li>{volume}</li>
                    <li>{base_unit}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
