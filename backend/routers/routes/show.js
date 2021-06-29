const express = require("express");
const showRouter = express.Router();

const {
  showAllCategories,
} = require("../controllers/show");

showRouter.get("/all", showAllCategories);

module.exports = showRouter;
