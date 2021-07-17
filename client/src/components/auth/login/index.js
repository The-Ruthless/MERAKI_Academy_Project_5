import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { setToken, setParsedToken } from "../../../reducers/token";
import "../login/login.css";

import { GoogleLogin } from "react-google-login";

import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";

export default function Login({ setRedirect }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(undefined);
  const [loginResult, setLoginResult] = useState(undefined);
  const [logged, setLogged] = useState(false);

  // ****************************show/hide pass*****************************
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // **********************************************************************

  const state = useSelector((statetree) => {
    return {
      token: statetree.token.token,
      parsedToken: statetree.token.parsedToken,
    };
  });

  const login = async () => {
    setLoginResult(undefined);
    axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND_SERVER}login`,
      data: { email, password: values.password },
    })
      .then((response) => {
        dispatch(setToken(response.data));
        localStorage.setItem("token", JSON.stringify(response.data));
        if (response.status == 200) setLogged(true);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setLoginResult(400);
        }
        if (err.response.status === 403) {
          setLoginResult(403);
        }
      });
  };

  // ****************************Google************************************

  const Glogin = async (response) => {
    setLoginResult(undefined);
    axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND_SERVER}login`,
      data: { email: response.profileObj.email, password: "google0000" },
    })
      .then((result) => {
        dispatch(setToken(result.data));
        localStorage.setItem("token", JSON.stringify(result.data));
        if (result.status == 200) setLogged(true);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          axios
            .post(`${process.env.REACT_APP_BACKEND_SERVER}register`, {
              email: response.profileObj.email,
              password: "google0000",
              full_name: response.profileObj.name,
            })
            .then((result) => {
              Glogin(response);
            });
        } else {
          throw new err();
        }
      });
  };

  const Gfail = (response) => {
    console.log(response);
  };

  //  *********************************************************************

  useEffect(() => {
    setRedirect("");
  }, []);
  return (
    <div className='loginPage'>
      <form className="login">
        <p id="title">Login</p>

        <TextField
          id="text"
          variant="standard"
          label="Email address"
          type="email"
          placeholder="please enter your email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        {/* **************************show/hide pass****************************** */}
        <FormControl>
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            placeholder="please enter your password"
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {/* ******************************************************************* */}

        <Button
          id="buttonl"
          variant="contained"
          color="primary"
          onClick={login}
        >
          {" "}
          Login{" "}
        </Button>

        <GoogleLogin
          className="google"
          clientId="837311133414-ohq0j0c1gl0tcormahcggad0pl62ndsn.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={Glogin}
          onFailure={Gfail}
        />

        {loginResult === 400 ? (
          <p className="Message">The Email you've entered doesn't exist</p>
        ) : loginResult === 403 ? (
          <p className="Message">The password you’ve entered is incorrect</p>
        ) : null}
      </form>
      {logged ? <Redirect to="/" /> : null}
    </div>
  );
}
