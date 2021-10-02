const http = require("http");

const fs = require("fs");
var path = "./views/";

const server = http.createServer((req, res) => {
  console.log("request made", req.url, req.method);
  console.log(res);
  res.setHeader("Content-Type", "text/html");
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
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
