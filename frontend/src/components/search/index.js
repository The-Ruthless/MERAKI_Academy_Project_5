import React from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./search.css";

const Search = ({ queryThroughWhat, setKeyword }) => {
  return (
    <div className="search">
      <h1>Search through our website</h1>
      <form className="searchBarBtn">
        <br />
        <br />
        <TextField
          className="searchBar"
          variant="outlined"
          placeholder="Look Up"
          onChange={(e) => {
            if (e.target.value) {
              setKeyword(e.target.value);
            } else {
              setKeyword("%%");
            }
          }}
        />
        <br />
        <br />

        <Button
          variant="contained"
          color="primary"
          id="searchBtn"
          onClick={() => queryThroughWhat("published_at DESC")}
        >
          Search
        </Button>
        <br />
        <br />
        <br />
      </form>
      <br />
      <br />
    </div>
  );
};

export default Search;
