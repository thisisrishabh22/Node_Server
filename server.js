const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request made", req.url, req.method);
  console.log(res);
  res.setHeader("Content-Type", "text/html");
  fs.readFile("./views/index.html", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.write(data);
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000 - http://localhost:3000");
});
