const express = require("express");
const showRouter = express.Router();

const {
  showAllCategories,
  showByCategory,
} = require("../controllers/show");

showRouter.get("/all", showAllCategories);
showRouter.get("/mainCat/:category", showByCategory);

module.exports = showRouter;
