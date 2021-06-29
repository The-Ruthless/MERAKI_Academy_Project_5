const express = require("express");
const showRouter = express.Router();

const {
  showAllCategories,
  showByCategory,
  showBySubCategory,
  showByUserId,
  showLastTwenty,
  showMyFavorites,
} = require("../controllers/show");

showRouter.get("/all", showAllCategories);
showRouter.get("/mainCat", showByCategory);
showRouter.get("/subCat", showBySubCategory);
showRouter.get("/user/:userId", showByUserId);
showRouter.get("/lastTwenty", showLastTwenty);
showRouter.get("/favorites/:userId", showMyFavorites);

module.exports = showRouter;
