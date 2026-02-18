const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  const newLog =
    new Date().toISOString() +
    " - " +
    req.method +
    " - " +
    req.url +
    "\n";

  fs.appendFile("log.txt", newLog, (err) => {
    if (err) {
      console.log("Error writing log:", err);
    }
  });

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Request logged successfully");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});