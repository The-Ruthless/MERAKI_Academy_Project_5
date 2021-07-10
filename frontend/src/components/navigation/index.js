import React from "react";
import { Link, useHistory } from "react-router-dom";

import DropDown from "./dropDown";
import "./navigation.css";

const Navigation = ({ setShowType, setSubCategory }) => {
  const eloctronics = {
    category: "Eloctronics",
    subCategories: ["laptops", "mobile_phones", "televisions"],
  };

  const history = useHistory();
  return (
    <div className="navigation">
      <div class="dropdown">
        <button class="dropbtn">Motors</button>
        <div class="dropdown-content">
          <Link style={{ textDecoration: "none" }} to="/advertisements/">
            <span
              onClick={() => {
                setShowType("subCategory");
                setSubCategory("cars");
              }}
            >
              Cars
            </span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/advertisements/"></Link>
          <span
            onClick={() => {
              setShowType("subCategory");
              setSubCategory("motorbikes");
            }}
          >
            Motorbikes
          </span>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Electronics</button>
        <div class="dropdown-content">
          <Link style={{ textDecoration: "none" }} to="/advertisements/">
            <span
              onClick={() => {
                setShowType("subCategory");
                setSubCategory("laptops");
              }}
            >
              Laptops
            </span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/advertisements/">
            <span
              onClick={() => {
                setShowType("subCategory");
                setSubCategory("mobile_phones");
              }}
            >
              Mobile Phones
            </span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/advertisements/">
            <span
              onClick={() => {
                setShowType("subCategory");
                setSubCategory("telivisions");
              }}
            >
              Televisions
            </span>
          </Link>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Accessoires</button>
        <div class="dropdown-content">
          <Link style={{ textDecoration: "none" }} to="/advertisements/">
            <span
              onClick={() => {
                setShowType("subCategory");
                setSubCategory("sun_glasses");
              }}
            >
              Sun Glasses
            </span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/advertisements/">
            <span
              onClick={() => {
                setShowType("subCategory");
                setSubCategory("watches");
              }}
            >
              Watches
            </span>
          </Link>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Pets</button>
        <div class="dropdown-content">
          <Link style={{ textDecoration: "none" }} to="/advertisements/">
            <span
              onClick={() => {
                setShowType("subCategory");
                setSubCategory("cats");
              }}
            >
              Cats
            </span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/advertisements/">
            <span
              onClick={() => {
                setShowType("subCategory");
                setSubCategory("dogs");
              }}
            >
              Dogs
            </span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/advertisements/">
            <span
              onClick={() => {
                setShowType("subCategory");
                setSubCategory("birds");
              }}
            >
              Birds
            </span>
          </Link>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Furniture</button>
        <div class="dropdown-content">
          <Link style={{ textDecoration: "none" }} to="/advertisements/">
            <span
              onClick={() => {
                setShowType("subCategory");
                setSubCategory("beds");
              }}
            >
              Beds
            </span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/advertisements/">
            <span
              onClick={() => {
                setShowType("subCategory");
                setSubCategory("wardrobes");
              }}
            >
              Wardrobes
            </span>
          </Link>
        </div>
      </div>
      {/* <DropDown
        setShowType={setShowType}
        setSubCategory={setSubCategory}
        category={eloctronics}
      /> */}
    </div>
  );
};

export default Navigation;
