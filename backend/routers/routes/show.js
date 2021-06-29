const express = require("express");
const showRouter = express.Router();

const {
  showAllCategories,
  showByCategory,
  showBySubCategory,
  showByUserId,
  showLastTwenty,
} = require("../controllers/show");

showRouter.get("/all", showAllCategories);
showRouter.get("/mainCat/:category", showByCategory);
showRouter.get("/subCat/:subCategory", showBySubCategory);
showRouter.get("/user/:userId", showByUserId);
showRouter.get("/lastTwenty", showLastTwenty);

module.exports = showRouter;
