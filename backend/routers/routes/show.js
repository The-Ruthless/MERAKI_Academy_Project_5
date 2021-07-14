const express = require("express");
const showRouter = express.Router();

const {
  showFilterSearchSortAll,
  showFilterSearchSortCategory,
  showFilterSearchSortSubCategory,
  showByUserId,
  showLastSix,
  showMyFavorites,
  showFilterSearchSortAllCount,
  showFilterSearchSortCategoryCount,
  showFilterSearchSortSubCategoryCount,
} = require("../controllers/show");

showRouter.get("/all/", showFilterSearchSortAll);
showRouter.get("/category/", showFilterSearchSortCategory);
showRouter.get("/subCategory/", showFilterSearchSortSubCategory);
showRouter.get("/subCategory/", showFilterSearchSortSubCategory);
showRouter.get("/user/:userId", showByUserId);
showRouter.get("/lastTwenty", showLastSix);
showRouter.get("/favorites/:userId", showMyFavorites);
showRouter.get("/all/count", showFilterSearchSortAllCount);
showRouter.get("/category/count", showFilterSearchSortCategoryCount);
showRouter.get("/subCategory/count", showFilterSearchSortSubCategoryCount);

module.exports = showRouter;
