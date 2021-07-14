import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PhoneIcon from "@material-ui/icons/Phone";
import ChatIcon from "@material-ui/icons/Chat";
import "./advertisement.css";
const axios = require("axios");

const Advertisement = () => {
  const params = useParams();
  const AdvId = params.id;

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

  const [advInfo, setAdvInfo] = useState();
  const [images, setImages] = useState();
  const [showNum, setShowNum] = useState(false);

  const advImages = () => {
    axios
      .get(`http://localhost:5000/getImages/${AdvId}`)
      .then((result) => {
        setImages(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  const advInformation = () => {
    axios
      .get(`http://localhost:5000/advertisements/info/${AdvId}`)
      .then((result) => {
        setAdvInfo(result.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  

  useEffect(() => {
    advInformation();
    advImages();
  }, []);

  return (
    <div className="advPage">
      <div id="top_div">
        <Splide
          id="slider"
          options={{
            type: "slide",
            rewind: true,
            width: 700,
            gap: "1rem",
            height: 550,
          }}
        >
          {images
            ? images.map((elem) => {
                return (
                  <SplideSlide>
                    <img className="jojo" src={elem.image_url} alt="Image 1" />
                  </SplideSlide>
                );
              })
            : null}
        </Splide>

        <div id="advTitleDiv">
          <h1 id="advTitle">{advInfo ? advInfo[0].title : null}</h1>
          <span id="timing">
            <AccessTimeIcon id="time_icons" />
            <p id="advDate">
              {advInfo ? timeAgo(advInfo[0].published_at) : null}
            </p>
          </span>
          <h2 id="adv_price">{advInfo ? advInfo[0].price : null} JD</h2>
          <div id="button_div">
            <button
              onClick={() => {
                if (showNum === false) {
                  setShowNum(true);
                } else {
                  setShowNum(false);
                }
              }}
              className="adv_button1"
            >
              <PhoneIcon id="phone_icon" />
              {advInfo && showNum
                ? advInfo[0].phone_number
                : "Show Phone Number"}
            </button>

            <button className="adv_button2">
              <ChatIcon id="chat_icon" />
              Chat with Owner
            </button>
          </div>
        </div>
      </div>

      <div id="oneAdvInfo">
        <hr id="hr_descr" />
        <h1 id="adv_descr">Description</h1>
        <hr id="hr_descr" />

        <p id="desc_para">{advInfo ? advInfo[0].description : null}</p>
      </div>
    </div>
  );
};

export default Advertisement;
