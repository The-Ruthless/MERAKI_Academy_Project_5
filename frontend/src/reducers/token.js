const jwt = require("jsonwebtoken");

const initialState = {
  token: "",
  parsedToken: {},
};

const token = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_TOKEN":
      return { token: payload, parsedToken: jwt.decode(payload) };

    default:
      return state;
  }
};

export default token;

export const setToken = (payload) => {
  return {
    type: "SET_TOKEN",
    payload: payload,
  };
};