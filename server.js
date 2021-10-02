const http = require("http");

const fs = require("fs");
var htmlTemplate;
fs.readFile("./template.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    htmlTemplate = data.toString();
  }
});

const server = http.createServer((req, res) => {
  console.log("request made", req.url, req.method);
  console.log(res);
  res.setHeader("Content-Type", "text/html");
  res.write(htmlTemplate);
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000 - http://localhost:3000");
});
