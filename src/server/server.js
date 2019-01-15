const http = require("http");
const {loadResource} = require("./load-resource");
require("./config");

const start = (route, handle) => {
  const handleRequest = (req, res) => {
    if(req.url.indexOf(process.env.IGNORE) === 0) {
      loadResource(req, res, req.url);
    } else {
      route(req, res, handle);
    }
  }

  http.createServer(handleRequest).listen(process.env.PORT);
  console.log("Server Start!");
}

module.exports = {
  start,
};