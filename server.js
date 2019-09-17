const config = require("./config");
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const sessionConfig = require("./config/sessionConfig");
const restrictedRoutes = require("./routes/restricted");
const authRoutes = require("./routes/auth");
const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(session(sessionConfig));

server.use("/api", authRoutes);
server.use("/api/restricted", restrictedRoutes);

module.exports = server;
