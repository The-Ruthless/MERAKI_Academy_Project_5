const express = require('express');
const cors = require('cors');
require("dotenv").config()
const db = require('./db/db');
const { config } = require('dotenv');

const app = express();

//routers

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
