import React, { useState } from "react";
import axios from "axios";
import "./signUp.css";
import { Redirect, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Register() {
  let history = useHistory();

  const [full_name, setFull_name] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const [mailErr, setMailErr] = useState(false);
  const [generalErr, setGeneralErr] = useState(false);
  const [success, setSuccess] = useState(false);

  const postUser = () => {
    setMailErr(false);
    setGeneralErr(false);
    setSuccess(false);
    axios
      .post(`http://localhost:5000/register`, {
        email: email,
        password: password,
        full_name: full_name,
      })
      .then((response) => {
        if (response.data.errno === 1062) {
          setMailErr(true);
        } else {
          if (response.data === "passOrMailError") {
            setGeneralErr(true);
          }
          setSuccess(true);
        }
      })
      .catch((error) => {
        alert("Please connect to the right host");
      });
  };

  return (
    <>
      <form className="register">
        <TextField
          id="text"
          variant="outlined"
          label="Name"
          type="text"
          placeholder="Enter your full Name"
          onChange={(e) => {
            setFull_name(e.target.value);
          }}
        />

        <TextField
          id="text"
          variant="outlined"
          label="Email address"
          type="email"
          placeholder="example@example.com "
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <TextField
          id="text"
          variant="outlined"
          label="Password"
          type="password"
          placeholder="Enter a new password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button
          id="button"
          variant="contained"
          color="primary"
          onClick={postUser}
        >
          {" "}
          Register{" "}
        </Button>

        {mailErr === true ? (
          <p className="Message">
            The Email you've entered already exists or is not filled correctly
          </p>
        ) : generalErr === true ? (
          <p className="Message">
            Please fill in all required fields correctly
          </p>
        ) : null}
      </form>
    </>
  );
}
