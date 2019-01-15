const ejs = require('ejs');

const index = (req, res) => {
  const listWebsitesComplete = [
    "Homepage",
    "Make a Deal!"
  ];

  const data = {
    title: "Day 1 - Homepage | 180 Websites | LanhKhoc",
    css: "day-1/day-1.css",
    js: "day-1.js",
    todayWebsite: listWebsitesComplete[listWebsitesComplete.length - 1],
    listWebsitesComplete: listWebsitesComplete.reverse()
  }

  ejs.renderFile("src/app/views/day-1.ejs", data, (error, content) => {
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
};