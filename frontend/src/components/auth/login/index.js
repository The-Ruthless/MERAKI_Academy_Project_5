import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setToken , setParsedToken } from "../../../reducers/token";

import "../login/login.css";

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from "@material-ui/core/Button";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(undefined);
  const [loginResult, setLoginResult] = useState(undefined);
  

// ********************************************************************* 
  const [values, setValues] = React.useState({
    password: '',
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

//  *********************************************************************

  const state = useSelector((statetree) => {
    return {
      token: statetree.token.token,
      parsedToken : statetree.token.parsedToken
    };
  });

  const login = async () => {
    setLoginResult(undefined)
    console.log(`password`, values.password)
    axios({
        method: 'post',
        url: 'http://localhost:5000/login',
        data: {email,password:values.password }
    })
    .then((response) => {
        console.log(response.data);
        dispatch (setToken (response.data));
        console.log(`settttt`, state.parsedToken)
        console.log(`settttt`, state.token)
        
      })
    .catch((err) => {
        if(err.response.status===400){setLoginResult(400)}
        if(err.response.status===403){setLoginResult(403)}
      });
  };

    return (
    <>
      <form className="login">
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
   
{/* ********************************************************************* */}
        <FormControl >
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            placeholder="please enter your password"
            onChange={handleChange('password')}
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

        <Button id="button" variant="contained" color="primary" onClick={login}>
          {" "}
          Login{" "}
        </Button>


        {loginResult === 400 ? (
          <p className="Message">
            The Email you've entered doesn't exist
          </p>
        ) : loginResult === 403 ? (
          <p className="Message">
            The password you’ve entered is incorrect
          </p>
        ) : null}


      </form>
    </>
  );
}
