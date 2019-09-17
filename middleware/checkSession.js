const checkToken = (req, res, next) => {
  const authorizationHeader = req.headers["authorization"];
  if (typeof authorizationHeader !== "undefined") {
    const bearer = authorizationHeader.split(" ");
    const token = bearer[1];

    req.token = token;

    next();
  } else {
    res.status(403).json({ message: "Missing token" });
  }
};

module.exports = checkToken;
