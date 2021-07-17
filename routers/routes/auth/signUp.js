const express = require("express");
const { createNewUser, editUser,userInform } = require("./../../controllers/auth/signUp");
const usersRouter = express.Router();

usersRouter.post("/register", createNewUser);
usersRouter.put("/register/:id", editUser);
usersRouter.get("/profile/:id", userInform);

module.exports = usersRouter;
