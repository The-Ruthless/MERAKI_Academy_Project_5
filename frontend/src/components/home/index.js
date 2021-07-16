import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoArrowRight } from "react-icons/go";
import Button from "@material-ui/core/Button";
import Adv from "../advertisements/adv";

import homeSvg from "./home.svg";
import shadow from "./shadow.svg";
import "./home.css";

const axios = require("axios").default;

const Home = ({ setShowType, setCategory, setSubCategory, setRedirect }) => {
  const history = useHistory();
  const [last10, setLast10] = useState([]);

  const showLast10 = () => {
    axios({
      method: "get",
      url: `http://localhost:5000/advertisements/lasttwenty`,
    })
      .then((response) => {
        setLast10(response.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    showLast10();
    setRedirect("");
    
  }, []);

  return (
    <div className="home">
      <div className="explore">
        <div className="main_welcome flex_item flex_item_1">
          <h2 className="welcome">Advertise With Us</h2>
          <p>
            We are a trading website where who you can advertise some
            categories with us such as :Furniture, Motors, Electornics and
            more...
          </p>
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

        <img alt="welcome_photo" src={homeSvg} className="flex_item" />
      </div>
      <div id="ob_cat_icons" style={{backgroundImage:`url(${shadow})`}}>
        <div
          onClick={() => {
            setShowType("all");
            history.push("/advertisements");
          }}
          className="ob_cate_icons"
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
          className="ob_cate_icons"
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
          className="ob_cate_icons"
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
          className="ob_cate_icons"
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
          className="ob_cate_icons"
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
          className="ob_cate_icons"
        >
          <FontAwesomeIcon className="icon" size="4x" icon="couch" />
          <p className="iconName">Furniture</p>
        </div>
      </div>
      <div className="recent_area">
        <h2 className="recentWord" style={{ display: "inline" }}>
          Recently added advertisements
        </h2>
        <div className="recent">
          {last10.map((elem, i) => (
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
    </div>
  );
};

export default Home;
