const http = require("http");
const fs = require("fs");
const _ = require("lodash");
var path = "./views/";

const server = http.createServer((req, res) => {
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log("hello");
  });

  greet();
  res.setHeader("Content-Type", "text/html");
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-us":
      res.setHeader("Location", "/about");
      res.statusCode = 301;
      res.end();
      break;
    case "/about-me":
      path += "about.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
      path = "./views/";
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000 - http://localhost:3000");
});
