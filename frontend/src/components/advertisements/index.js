import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

import Search from "../search";
import Adv from "./adv";
import "./advertisements.css";

const axios = require("axios").default;

const Advertisements = ({ category, subCategory, showType }) => {
  const [advertisements, setAdvertisements] = useState([]);
  const [location, setLocation] = useState("%%");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(999999);
  const [keyword, setKeyword] = useState("%%");

  const queryThroughWhat = (sortValue) => {
    if (showType === "all") showSearchSortFilterInAll(sortValue);
    if (showType === "category") showSearchSortFilterInCategory(sortValue);
    if (showType === "subCategory")
      showSearchSortFilterInSubCategory(sortValue);
  };

  const showSearchSortFilterInAll = (sort = "published_at DESC") => {
    axios({
      method: "get",
      url: `http://localhost:5000/advertisements/all?location=${location}&min=${min}&max=${max}&sortOrder=${sort}&keyword=${keyword}`,
    })
      .then((response) => {
        setAdvertisements(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err.response);
      });
  };

  const showSearchSortFilterInCategory = (sort = "published_at DESC") => {
    axios({
      method: "get",
      url: `http://localhost:5000/advertisements/category?category=${category}&location=${location}&min=${min}&max=${max}&sortOrder=${sort}&keyword=${keyword}`,
    })
      .then((response) => {
        setAdvertisements(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err.response);
      });
  };

  const showSearchSortFilterInSubCategory = (sort = "published_at DESC") => {
    axios({
      method: "get",
      url: `http://localhost:5000/advertisements/subCategory?subCategory=${subCategory}&location=${location}&min=${min}&max=${max}&sortOrder=${sort}&keyword=${keyword}`,
    })
      .then((response) => {
        setAdvertisements(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err.response);
      });
  };

  useEffect(() => {
    queryThroughWhat();
  }, [subCategory]);

  return (
    <div className="advertisements">
      <Search setKeyword={setKeyword} queryThroughWhat={queryThroughWhat} />
      <div className="filterBar">
        <form style={{ display: "inline" }} className="filterArea">
          <div style={{ display: "inline" }}>
            <label>Location:</label>
            <select
              name="location"
              defaultValue="%%"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            >
              <option value="%%">select city</option>
              <option value="Amman">Amman</option>
              <option value="Zarqa">Zarqa</option>
              <option value="Irbid">Irbid</option>
              <option value="Jerash">Jerash</option>
              <option value="Tafilah">Tafilah</option>
              <option value="Ajloun">Ajloun</option>
              <option value="as-Salt">as-Salt</option>
              <option value="Karak">Karak</option>
              <option value="Mafraq">Mafraq</option>
              <option value="Ma'an">Ma'an</option>
              <option value="Aqaba">Aqaba</option>
              <option value="Madaba">Madaba</option>
            </select>
          </div>
          <div className="priceFilter" style={{ display: "inline" }}>
            <label>Price from:</label>
            <input
              type="number"
              id="priceFilterDown"
              placeholder="$$"
              onChange={(e) => {
                if(e.target.value){setMin(e.target.value)}else{setMin(0)};
              }}
            />
            <label>to:</label>
            <input
              type="number"
              id="priceFilterUp"
              placeholder="$$"
              onChange={(e) => {
                if(e.target.value){setMax(e.target.value)}else{setMax(999999)};
              }}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            id="filterBtn"
            onClick={() => queryThroughWhat("published_at DESC")}
          >
            Filter
          </Button>
        </form>
        <form className="sort" style={{ display: "inline" }}>
          <label>Sort:</label>
          <select
            name="sort"
            id="sort"
            defaultValue="published_at DESC"
            onChange={(e) => {
              queryThroughWhat(e.target.value);
            }}
          >
            <option value="published_at DESC">Newest first</option>
            <option value="published_at ASC">Oldest first</option>
            <option value="Price ASC">Price (low to high)</option>
            <option value="Price DESC">Price (high to low)</option>
          </select>
        </form>
      </div>
      <div className="showSpace">
        {advertisements.map((elem, i) => (
          <Adv
            key={i}
            id={elem.id}
            image={elem.image}
            title={elem.title}
            price={elem.price}
            location={elem.location}
            date={elem.published_at}
          />
        ))}
      </div>
    </div>
  );
};

export default Advertisements;
