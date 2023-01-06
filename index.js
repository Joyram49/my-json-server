const jsonServer = require("json-server");
const cors = require("cors");
const data = require("./db.js");

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

const port = process.env.PORT || 5001;

server.listen(port, (req, res) => {
  console.log(`JSON server is running on http://localhost:${port}`);
});
