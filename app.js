const express = require("express");
const bodyparser = require("body-parser");


const app = express();

//Middleware for bodyparser
app.use(bodyparser.urlencoded({ extended: false}));
//app.use(bodyparser.json());


// Server setup
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running at port: ${port}`));
