import express = require("express");

import hello = require("./hello");

require("source-map-support").install();

const app = express();

app.use(hello);

app.listen(1337, () => {
  console.log("http://localhost:1337/hello/world");
});
