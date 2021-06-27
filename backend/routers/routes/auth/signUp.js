const express = require("express");
const { createNewUser, editUser } = require("./../../controllers/auth/signUp");
const usersRouter = express.Router();

usersRouter.post("/register", createNewUser);
usersRouter.put("/register/:id", editUser);

module.exports = usersRouter;
