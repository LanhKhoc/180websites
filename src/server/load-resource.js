const fs = require("fs");

const loadResource = (req, res, path) => {
  const prePath = "src/app";
  fs.createReadStream(prePath + path).pipe(res);
}

module.exports = {
  loadResource,
};