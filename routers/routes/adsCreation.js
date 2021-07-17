const express = require("express");
adsCreationRouter = express.Router();

const {
  createAdvertisment,
  addToFavorite,
} = require("../controllers/adsCreation");

adsCreationRouter.post("/create", createAdvertisment);
adsCreationRouter.post("/favorite", addToFavorite);

module.exports = adsCreationRouter;
