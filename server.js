const express = require("express");
const helmet = require("helmet");
const server = express();

const databaseModelRoute = require("./routes/databaseModel-route.js");

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.send("It's alive!");
});

server.use("/api/data", databaseModelRoute);

module.exports = server;
