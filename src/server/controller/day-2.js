const index = (req, res) => {
  const data = {
    title: "Day 2 | 180 Websites | LanhKhoc",
    css: "day-1/day-1.css",
    js: "day-1.js",
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