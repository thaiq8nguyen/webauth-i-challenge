const express = require("express");
const path = require("path");
const morgan = require("morgan");
const restrictedRoutes = require("./routes/restricted");
const authRoutes = require("./routes/auth");
const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use("/auth", authRoutes);
server.use("/api", restrictedRoutes);

server.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

module.exports = server;
