import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { IoLocationSharp } from "react-icons/io5";
import { BsStar, BsStarFill } from "react-icons/bs";

import "./adv.css";

const axios = require("axios").default;
const jwt = require("jsonwebtoken");

const Adv = ({ title, price, location, image, id ,date}) => {
  const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function getFormattedDate(date, prefomattedDate = false, hideYear = false) {
    const day = date.getDate();
    const month = MONTH_NAMES[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
      // Adding leading zero to minutes
      minutes = `0${minutes}`;
    }
    if (prefomattedDate) {
      // Today at 10:20
      // Yesterday at 10:20
      return `${prefomattedDate} at ${hours}:${minutes}`;
    }
    if (hideYear) {
      // 10. January at 10:20
      return `${day}. ${month} at ${hours}:${minutes}`;
    }
    // 10. January 2017. at 10:20
    return `${day}. ${month} ${year}. at ${hours}:${minutes}`;
  }
  function timeAgo(dateParam) {
    if (!dateParam) {
      return null;
    }
    const date =
      typeof dateParam === "object" ? dateParam : new Date(dateParam);
    const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
    const today = new Date();
    const yesterday = new Date(today - DAY_IN_MS);
    const seconds = Math.round((today - date) / 1000);
    const minutes = Math.round(seconds / 60);
    const isToday = today.toDateString() === date.toDateString();
    const isYesterday = yesterday.toDateString() === date.toDateString();
    const isThisYear = today.getFullYear() === date.getFullYear();
    if (seconds < 5) {
      return "now";
    } else if (seconds < 60) {
      return `${seconds} seconds ago`;
    } else if (seconds < 90) {
      return "about a minute ago";
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (isToday) {
      return getFormattedDate(date, "Today"); // Today at 10:20
    } else if (isYesterday) {
      return getFormattedDate(date, "Yesterday"); // Yesterday at 10:20
    } else if (isThisYear) {
      return getFormattedDate(date, false, true); // 10. January at 10:20
    }
    return getFormattedDate(date); // 10. January 2017. at 10:
  }

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
      <span className='date'>{timeAgo(date)}</span>
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
