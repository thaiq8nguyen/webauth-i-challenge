const server = require("./server");
const config = require("./config");
const PORT = config.port || 4000;

server.listen(PORT, () => {
  console.log(`--Server is on port ${PORT}`);
});
