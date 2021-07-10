import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoArrowRight } from "react-icons/go";
import Button from "@material-ui/core/Button";
// import Adv from "../advertisements/adv";

import "./home.css";

const axios = require("axios").default;

const Home = ({ setShowType, setCategory, setSubCategory }) => {
  const history = useHistory();
  const [last10, setLast10] = useState([]);

  const showLast10 = () => {
    axios({
      method: "get",
      url: `http://localhost:5000/advertisements/lasttwenty`,
    })
      .then((response) => {
        console.log(response.data);
        setLast10(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err.response);
      });
  };

  useEffect(() => {
    console.log("hi");
    showLast10();
  }, []);

  return (
    <div className="home">
      <div className="explore">
        <br />
        <br />
        <br />
        <h1 className="welcome">
          Welcome to our website .. the convenient trading place
        </h1>
        <br />
        <Button
          variant="contained"
          color="primary"
          className="welcomeBtn"
          onClick={() => {
            setShowType("all");
            history.push("/advertisements");
          }}
        >
          Explore &nbsp; <GoArrowRight className="exploreArrow" />
        </Button>
      </div>
      <div id="cat_icons">
        <div
          onClick={() => {
            setShowType("all");
            history.push("/advertisements");
          }}
          className="cate_icons"
        >
          <FontAwesomeIcon className="icon" size="4x" icon="infinity" />
          <p className="iconName">ALL</p>
        </div>
        <div
          onClick={() => {
            setShowType("category");
            setCategory("motors");
            history.push("/advertisements");
          }}
          className="cate_icons"
        >
          <FontAwesomeIcon className="icon" size="4x" icon="car" />
          <p className="iconName">Motors</p>
        </div>{" "}
        <div
          onClick={() => {
            setShowType("category");
            setCategory("electronics");
            history.push("/advertisements");
          }}
          className="cate_icons"
        >
          <FontAwesomeIcon className="icon" size="4x" icon="plug" />
          <p className="iconName">Electronics</p>
        </div>
        <div
          onClick={() => {
            setShowType("category");
            setCategory("accessories");
            history.push("/advertisements");
          }}
          className="cate_icons"
        >
          <FontAwesomeIcon className="icon" size="4x" icon="gifts" />
          <p className="iconName">Accessoires</p>
        </div>
        <div
          onClick={() => {
            setShowType("category");
            setCategory("pets");
            history.push("/advertisements");
          }}
          className="cate_icons"
        >
          <FontAwesomeIcon className="icon" size="4x" icon="paw" />
          <p className="iconName">Pets</p>
        </div>
        <div
          onClick={() => {
            setShowType("category");
            setCategory("furniture");
            history.push("/advertisements");
          }}
          className="cate_icons"
        >
          <FontAwesomeIcon className="icon" size="4x" icon="couch" />
          <p className="iconName">Furniture</p>
        </div>
      </div>
      <h2 className="recentWord" style={{display:'inline'}}>Recently added advertisements</h2><hr className='style-two'/>
      {/* <div className="recent">
        {last10.map((elem, i) => (
          <Adv
            key={i}
            id={elem.id}
            image={elem.image}
            title={elem.title}
            price={elem.price}
            location={elem.location}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Home;
