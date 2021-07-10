import React,{useState} from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import ruthless from "./Ruthless-07.png";
import "./header.css";

const Header = ({redirect,setRedirect}) => {
  
  const state = useSelector((statetree) => {
    return {
      token: statetree.token.token,
      parsedToken: statetree.token.parsedToken,
    };
  });
  const placeAdvRedirect =()=>{
    if(state.parsedToken.userId){setRedirect('toPlaceAdv')}else{setRedirect('toLogin')}
  }
  return (
    <div className="header">
      <Link style={{ textDecoration: "none" }} to="/home">
        <span className="theRuthless">The Ruthless</span>
      </Link>
      <img
        style={{ display: "inline" }}
        className="ruthless"
        src={ruthless}
        alt="Ruthless"
      />
      <Button
        variant="contained"
        color="default"
        id="placeAdv"
        onClick={placeAdvRedirect}
      >
        Place Your Ad
      </Button>
      {state.parsedToken.userId ? (
        <span className="ob_profile">
          <AccountCircleIcon id="profile_icon" />
          My Profile
        </span>
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
      {redirect==='toPlaceAdv'?<Redirect to='/placeAdv'/>:redirect==='toLogin'?<Redirect to='/login'/>:null}
    </div>
  );
};

export default Header;
