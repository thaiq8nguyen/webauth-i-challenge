const config = require("./config");
const express = require("express");
const morgan = require("morgan");
const restrictedRoutes = require("./routes/restricted");
const authRoutes = require("./routes/auth");
const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use("/api", authRoutes);
server.use("/api/restricted", restrictedRoutes);

module.exports = server;
