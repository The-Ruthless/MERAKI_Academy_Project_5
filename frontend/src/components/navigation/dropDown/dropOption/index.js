import React from "react";
import { Link } from "react-router-dom";

import "../dropDown.css";

const DropOption = ({ subCategory, setShowType, setSubCategory }) => {
  return (
	<Link style={{ textDecoration: "none" }} to='advertisements/laptops'>
    <span
      onClick={() => {
        setShowType("subCategory");
        setSubCategory(subCategory);
      }}
    >
      {subCategory.replace("_", " ")}
    </span>
	</Link>
  );
};

export default DropOption;
