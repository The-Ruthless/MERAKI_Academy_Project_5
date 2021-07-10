import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setParsedToken } from "../../reducers/token";

import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import ruthless from "./Ruthless-07.png";
import "./header.css";

const jwt = require("jsonwebtoken");

const Header = ({ redirect, setRedirect }) => {
  const dispatch = useDispatch();
  const state = useSelector((statetree) => {
    return {
      token: statetree.token.token,
      parsedToken: statetree.token.parsedToken,
    };
  });
  const placeAdvRedirect = () => {
    if (state.token) {
      setRedirect("toPlaceAdv");
    } else {
      setRedirect("toLogin");
    }
  };
  // const { REACT_APP_SECRET_KEY } = process.env;

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    // if(token){console.log( jwt.verify(token, 'secretKey'))}
    if (token) {
      if (jwt.verify(token, "secretKey")) {
        dispatch(setToken(token));
      }
    }
  }, []);
  return (
    <div className="header">
      <Link style={{ textDecoration: "none" }} to="/home">
        <span className="theRuthless">The Ruthless</span>
      <img
        style={{ display: "inline" }}
        className="ruthless"
        src={ruthless}
        alt="Ruthless"
        />
        </Link>
      <Button
        variant="contained"
        color="default"
        id="placeAdv"
        onClick={placeAdvRedirect}
      >
        Place Your Ad
      </Button>
      {state.token? (
        <div className="ob_login">
        <span className="ob_profile">
          <AccountCircleIcon id="profile_icon" />
          My Profile
        </span>
        <span onClick={()=>{dispatch(setToken(''));localStorage.clear();}}>Logout</span>
        </div>
      ) : (
        <div className="ob_login">
          <Link style={{ textDecoration: "none", color: "white" }} to="/login">
            <span>Login</span>
          </Link>
          <Link style={{ textDecoration: "none", color: "white" }} to="/signup">
            <span>Register</span>
          </Link>
        </div>
      )}
      {redirect === "toPlaceAdv" ? (
        <Redirect to="/placeAdv" />
      ) : redirect === "toLogin" ? (
        <Redirect to="/login" />
      ) : null}
    </div>
  );
};

export default Header;
