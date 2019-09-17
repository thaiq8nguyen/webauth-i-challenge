const checkSession = (req, res, next) => {
  if (req.session && req.session.token) {
    req.token = req.session.token;
    next();
  } else {
    res.status(400).json({
      error: true,
      message: "Invalid session or the session has expired"
    });
  }
};

module.exports = checkSession;
