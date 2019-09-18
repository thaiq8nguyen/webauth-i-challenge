const config = require("./config");
const express = require("express");
const morgan = require("morgan");
const restrictedRoutes = require("./routes/restricted");
const authRoutes = require("./routes/auth");
const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use("/auth", authRoutes);
server.use("/api", restrictedRoutes);

module.exports = server;
