import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./placeAdvertisement.css";

const PlaceAdvCat = ({ setIcons }) => {
  const motors = [
    { text: "CARS", icon: "car", id: 1 },
    { text: "MotorBikes", icon: "motorcycle", id: 2 },
  ];
  const electronics = [
    { text: "Laptops", icon: "laptop", id: 3 },
    { text: "Mobiles Phone", icon: "mobile-alt", id: 4 },
    { text: "Television", icon: "tv", id: 5 },
  ];
  const accessoires = [
    { text: "Glasses", icon: "glasses", id: 6 },
    { text: "Watches", icon: "clock", id: 7 },
  ];
  const pets = [
    { text: "Cats", icon: "cat", id: 8 },
    { text: "Dogs", icon: "dog", id: 9 },
    { text: "Birds", icon: "crow", id: 10 },
  ];
  const furniture = [
    { text: "Wardrobes", icon: "archive", id: 11 },
    { text: "Beds", icon: "bed", id: 12 },
  ];

  return (
    <div id="adv">
      <div id="OM_head">
        <h1 id="OM_h2">Hello, what are you listing today?</h1>
        <h2 id="OM_h3">Select the area that best suits your ad</h2>
      </div>

      <div id="cat_icons">
        <Link to="/placeAdv/subcatrgory">
          <div
            onClick={() => {
              setIcons(motors);
			  localStorage.setItem("icons", JSON.stringify(motors));
            }}
            className="cate_icons"
          >
            <FontAwesomeIcon className="ic_color" id="motors_icon" size="5x" icon="car" />
            <h2 id="OM_cat_motors">Motors</h2>
          </div>{" "}
        </Link>

        <Link to="/placeAdv/subcatrgory">
          <div
            onClick={() => {
              setIcons(electronics);
			  localStorage.setItem("icons", JSON.stringify(electronics));
            }}
            className="cate_icons"
          >
            <FontAwesomeIcon className="ic_color" id="electronics_icon" size="5x" icon="plug" />
            <h2 id="OM_cat_electronics">Electronics</h2>
          </div>
        </Link>

        <Link to="/placeAdv/subcatrgory">
          <div
            onClick={() => {
              setIcons(accessoires);
              localStorage.setItem("icons", JSON.stringify(accessoires));
            }}
            className="cate_icons"
          >
            <FontAwesomeIcon className="ic_color" id="accessoires_icon" size="5x" icon="gifts" />
            <h2 id="OM_cat_accessoires">Accessoires</h2>
          </div>
        </Link>

        <Link to="/placeAdv/subcatrgory">
          <div
            onClick={() => {
              setIcons(pets);
              localStorage.setItem("icons", JSON.stringify(pets));
            }}
            className="cate_icons"
          >
            <FontAwesomeIcon className="ic_color" id="pets_icon" size="5x" icon="paw" />
            <h2 id="OM_cat_pets">Pets</h2>
          </div>
        </Link>

        <Link to="/placeAdv/subcatrgory">
          <div
            onClick={() => {
              setIcons(furniture);
              localStorage.setItem("icons", JSON.stringify(furniture));
            }}
            className="cate_icons"
          >
            <FontAwesomeIcon className="ic_color" id="furniture_icon" size="5x" icon="couch" />
            <h2  id="OM_cat_furniture">Furniture</h2>
          </div>
        </Link>

        <div className="cate_icons">
          <FontAwesomeIcon className="ic_color" id="books_icon" size="5x" icon="book" />
          <h2  id="OM_cat_books">Books</h2>
        </div>
      </div>
    </div>
  );
};

export default PlaceAdvCat;
