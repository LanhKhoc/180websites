const day1 = require("./controller/day-1");
const day2 = require("./controller/day-2");

let handle = {};
handle["/"] = day1.index;
handle["/day-1"] = day1.index;
handle["/day-2"] = day2.index;

module.exports = {
  handle,
};