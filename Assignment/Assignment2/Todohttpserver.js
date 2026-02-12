const http = require("http");

const todos = [
    { id: 1, task: "Study Node.js" },
    { id: 2, task: "Practice coding" }
];

const server = http.createServer((req, res) => {

    if (req.url === "/todos" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(todos));
    } 
    else if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to TODO Server");
    }
    else {
        res.writeHead(404);
        res.end("Wrong route");
    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});