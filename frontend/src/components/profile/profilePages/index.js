import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./profilePages.css";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
const axios = require("axios");
const jwt = require("jsonwebtoken");

const MyProfile = () => {
  const state = useSelector((statetree) => {
    return {
      token: statetree.token.token,
      parsedToken: statetree.token.parsedToken,
    };
  });

  const [edit, setEdit] = useState();
  const [userInform, setUserInform] = useState();

  const userInformation = () => {
    if (state.token) {
      const userToken = jwt.decode(state.token);
      axios
        .get(`http://localhost:5000/profile/${userToken.userId}`)
        .then((result) => {
          setUserInform(result.data[0]);
          localStorage.setItem("userInform", JSON.stringify(result.data[0]));
        })
        .catch((err) => {
          throw err;
        });
    }
  };

  useEffect(() => {
    userInformation();
  }, [state.token, userInform]);

  return (
    <div id="OM_profile">
      <h1 id="pro_header">Profile</h1>
      <hr id="hr_profile" />

      <div id="user_inform">
        <img
          id="profile_image"
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          alt="new"
        />

        <div id="inform">
          <span className="p_inform">
            Full Name :{userInform ? userInform.full_name : null}
            {userInform && userInform.full_name ? null : "---------"}{" "}
          </span>
          <span className="p_inform">
            Age : {userInform ? userInform.age : null}
            {userInform && userInform.age ? null : "---"}{" "}
          </span>
          <span className="p_inform">
            Gender : {userInform ? userInform.gender : null}{" "}
            {userInform && userInform.gender ? null : "---"}{" "}
          </span>
          <span className="p_inform">
            Nationality : {userInform ? userInform.nationality : null}
            {userInform && userInform.nationality ? null : "---"}{" "}
          </span>
          <span className="p_inform">
            Phone Number : {userInform ? userInform.phone_number : null}{" "}
            {userInform && userInform.phone_number ? null : "---"}{" "}
          </span>
          <span className="p_inform">
            Location : {userInform ? userInform.current_location : null}
            {userInform && userInform.current_location ? null : "---"}{" "}
          </span>
          <Button
            onClick={() => {
              setEdit("1");
            }}
            id="edit_profile_but"
            variant="contained"
            color="black"
            component="span"
          >
            Edit Profile
          </Button>
          {edit ? <Redirect to="/Profile/edit" /> : null}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
