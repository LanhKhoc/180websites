const server = require("./src/server/server");
const router = require("./src/server/router");
const controller = require("./src/server/core.controller");

server.start(router.route, controller.handle);