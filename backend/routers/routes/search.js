const express = require("express");
searchRouter = express.Router();

const {
  searchAll,
  searchByCategory,
  searchBySubCategory,
} = require("../controllers/search");

searchRouter.get("/all", searchAll);
searchRouter.get("/mainCat", searchByCategory);
searchRouter.get("/subCat", searchBySubCategory);

module.exports = searchRouter;
