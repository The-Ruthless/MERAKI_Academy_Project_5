const express = require("express");
searchRouter = express.Router();

const { searchAll, searchByCategory } = require("../controllers/search");

searchRouter.get("/all", searchAll);
searchRouter.get("/mainCat", searchByCategory);

module.exports = searchRouter;
