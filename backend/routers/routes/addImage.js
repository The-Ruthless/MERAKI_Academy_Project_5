const express = require("express");
addImageRouter = express.Router();

const {
    addImage,
    getImages,
} = require("../controllers/addImage");

addImageRouter.post("/Image", addImage);
addImageRouter.get("/getImages/:id", getImages);


module.exports = addImageRouter;