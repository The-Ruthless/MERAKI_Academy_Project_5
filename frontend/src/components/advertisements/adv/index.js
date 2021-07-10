import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { IoLocationSharp } from "react-icons/io5";
import { BsStar, BsStarFill } from "react-icons/bs";

import "./adv.css";

const axios = require("axios").default;
const jwt = require("jsonwebtoken");

const Adv = ({ title, price, location, image, id }) => {
  const state = useSelector((statetree) => {
    return {
      token: statetree.token.token,
      parsedToken: statetree.token.parsedToken,
    };
  });
  const [fav, setFav] = useState(false);

  const addToFavorites = (adv_id) => {
    axios({
      method: "post",
      url: "http://localhost:5000/advertisement/favorite",
      data: { user_id: jwt.decode(state.token).userId, adv_id: adv_id },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("ERR: ", err.response);
      });
  };
  return (
    <div className="adv">
      <img
        className="img"
        src={image}
        alt="product photo"
        width="97%"
        height="100%"
      />
      <br />
      <Link to="/home" className="advLink">
        {title}
      </Link>
      <br />
      <span className="locInfo">
        <IoLocationSharp className="locIcon" /> {location}
      </span>
      <br />
      <span className="price">{price}&nbsp;JOD</span>
      <span
        className="favBtn"
        onClick={() => {
          addToFavorites(id);
          setFav(true);
        }}
      >
        {fav ? <BsStarFill /> : <BsStar />}
      </span>
    </div>
  );
};

export default Adv;
