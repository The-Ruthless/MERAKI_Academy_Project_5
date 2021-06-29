const express = require("express");
adsCreationRouter = express.Router();

const {
    createAdvertisment,
    addToFavoraite,
  } = require("../controllers/adsCreation");

  adsCreationRouter.post("/create", createAdvertisment);
  adsCreationRouter.post("/favoraite", addToFavoraite);






module.exports = adsCreationRouter;