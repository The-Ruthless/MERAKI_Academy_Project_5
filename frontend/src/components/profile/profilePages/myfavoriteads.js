import React, { useState, useEffect } from "react";
import "./profilePages.css";
import MyOneAds from "./myoneads";
import { useSelector } from "react-redux";
const jwt = require("jsonwebtoken");
const axios = require("axios");

const MyfavoriteAds = () => {
  const [userFavorAds, setUserFavorAds] = useState([]);

  const state = useSelector((statetree) => {
    return {
      token: statetree.token.token,
      parsedToken: statetree.token.parsedToken,
    };
  });

  const getUserFavoriteAds = () => {
    if (state.token) {
      const userToken = jwt.decode(state.token);

      axios
        .get(
          `${process.env.REACT_APP_BACKEND_SERVER}advertisements/favorites/${userToken.userId}`
        )
        .then((result) => {
          setUserFavorAds(result.data);
          console.log(result.data);
        })
        .catch((err) => {
          throw err;
        });
    }
  };

  useEffect(() => {
    getUserFavoriteAds();
  }, []);

  return (
    <div id="OM_MyAds">
      <h1 id="myads_header">My Favorite Ads</h1>
      <hr id="hr_myads" />

      <div id="myads_div">
        {userFavorAds
          ? userFavorAds.map((elem) => {
              return (
                <MyOneAds
                  title={elem.title}
                  price={elem.price}
                  location={elem.location}
                  image={elem.image}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default MyfavoriteAds;
