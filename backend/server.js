const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db/db");

const app = express();

//routers
const usersRouter = require("./routers/routes/auth/signUp");
const loginRouter = require("./routers/routes/auth/login");
const showRouter = require("./routers/routes/show");
const adsCreationRouter = require("./routers/routes/adsCreation");

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.use(usersRouter);
app.use(loginRouter);
app.use("/advertisements", showRouter);
app.use("/advertisement", adsCreationRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
