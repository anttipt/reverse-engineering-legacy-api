const express = require("express");

const app = express();

// Jos sinulla on middlewares:
app.use(express.json());

// Jos sinulla on reitit:
const itemsRouter = require("./routes/items.js");
app.use("/v1/items", itemsRouter);

// Exportataan app testejä varten
module.exports = app;