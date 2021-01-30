const { response } = require("express");
const express = require("express");
const path = require("path");

//include shop routes
const shopRoutes = require("./routes/shopRoutes.js");

const PORT = 8000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "static")));

//use middleware
app.use(shopRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
