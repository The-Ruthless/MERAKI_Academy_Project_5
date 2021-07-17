const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db/db");
const path = require('path');

const app = express();

//routers
const usersRouter = require("./routers/routes/auth/signUp");
const loginRouter = require("./routers/routes/auth/login");
const showRouter = require("./routers/routes/show");
const adsCreationRouter = require("./routers/routes/adsCreation");
const addImageRouter = require("./routers/routes/addImage");

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

app.use(express.static(path.resolve(__dirname, './client/build')));

//app routers
app.use(usersRouter);
app.use(loginRouter);
app.use("/advertisements", showRouter);
app.use("/advertisement", adsCreationRouter);
app.use("/", addImageRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
