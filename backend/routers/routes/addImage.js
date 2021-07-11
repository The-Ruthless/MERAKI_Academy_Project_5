const express = require("express");
addImageRouter = express.Router();

const {
    addImage
} = require("../controllers/addImage");

addImageRouter.post("/Image", addImage);


module.exports = addImageRouter;