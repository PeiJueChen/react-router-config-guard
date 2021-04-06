"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./umd/react-router-config-guard.min.js");
} else {
  module.exports = require("./umd/react-router-config-guard.js");
}