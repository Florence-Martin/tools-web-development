"use strict";

var _handlers = require("./handlers");
module.exports = function (routes) {
  routes.get("/", _handlers.getPosts);
};