const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
    app.use(cors())
    app.use(express.json())// this is so that the app can parse the json 

