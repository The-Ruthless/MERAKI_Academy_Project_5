import React from "react";
import DropOption from "./dropOption";
import "./dropDown.css";

const DropDown = ({ category, setShowType, setSubCategory }) => {
  return (
    <div className="dropdown">
      <button class="dropbtn">{category.category}</button>
      <div class="dropdown-content">
        {category.subCategories.map((elem, i) => (<DropOption key={i} subCategory={elem} setShowType={setShowType} setSubCategory={setSubCategory} />))}
      </div>
    </div>
  );
};

export default DropDown;
