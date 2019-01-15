const ejs = require('ejs');

const index = (req, res) => {
  const data = {
    title: "Day 2 | 180 Websites | LanhKhoc",
    css: "day-2/day-2.css",
    js: "day-2.js",
  };

  ejs.renderFile("src/app/views/day-2.ejs", data, (error, content) => {
    if(error) {
      res.writeHead(404, {"Content-Type": "text/html"});
      res.end(error);
    } else {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(content);
    }
  })
}

module.exports = {
  index,
}