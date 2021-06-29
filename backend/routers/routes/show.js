const express = require("express");
const showRouter = express.Router();

const {
  showAllCategories,
  showByCategory,
  showBySubCategory,
} = require("../controllers/show");

showRouter.get("/all", showAllCategories);
showRouter.get("/mainCat/:category", showByCategory);
showRouter.get("/subCat/:subCategory", showBySubCategory);

module.exports = showRouter;
