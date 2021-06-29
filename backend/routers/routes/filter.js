const express = require("express");
const filterRouter = express.Router();

const {
 filterAllCategoriesByLocation,
 filterAllCategoriesByPrice,
 filterAllCategoriesByPriceAndLocation,
 showByCategoryByLocation,
 showByCategoryByPrice,
 showByCategoryByPriceAndLocation,
 showBySubCategoryByLocation,
 showBySubCategoryByPrice,
 showBySubCategoryByPriceAndLocation
  
} = require("../controllers/filter");

filterRouter.get("/all/:location", filterAllCategoriesByLocation);
filterRouter.post("/all/byPrice", filterAllCategoriesByPrice);
filterRouter.post("/all/byPriceAndLocation", filterAllCategoriesByPriceAndLocation);
filterRouter.post("/category/byLocation", showByCategoryByLocation);
filterRouter.post("/category/byPrice", showByCategoryByPrice);
filterRouter.post("/category/byPriceAndLocation", showByCategoryByPriceAndLocation);
filterRouter.post("/subCategory/byLocation", showBySubCategoryByLocation);
filterRouter.post("/subCategory/byPrice", showBySubCategoryByPrice);
filterRouter.post("/subCategory/byPriceAndLocation", showBySubCategoryByPriceAndLocation);


module.exports = filterRouter;