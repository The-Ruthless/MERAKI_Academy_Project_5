const express = require("express");
searchRouter = express.Router();

const { searchAll } = require("../controllers/search");

searchRouter.get("/all", searchAll);

module.exports = searchRouter;
