const express = require("express");
const showRouter = express.Router();

const {
  showFilterSearchSortAll,
  showFilterSearchSortCategory,
  showFilterSearchSortSubCategory,
  showByUserId,
  showLastSix,
  showMyFavorites,
} = require("../controllers/show");

showRouter.get("/all/", showFilterSearchSortAll);
showRouter.get("/category/", showFilterSearchSortCategory);
showRouter.get("/subCategory/", showFilterSearchSortSubCategory);
showRouter.get("/subCategory/", showFilterSearchSortSubCategory);
showRouter.get("/user/:userId", showByUserId);
showRouter.get("/lastTwenty", showLastSix);
showRouter.get("/favorites/:userId", showMyFavorites);

module.exports = showRouter;
