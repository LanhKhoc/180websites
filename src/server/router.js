const route = (req, res, handle) => {
  if(typeof handle[req.url] === "function") {
    handle[req.url](req, res);
  } else {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("404 not found!");
  }
}


module.exports = {
  route,
};