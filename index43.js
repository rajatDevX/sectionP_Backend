const http = require("http");

const server = http.createServer((req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    console.log("got chunk:", chunk);
    body += chunk.toString();
  });

  req.on("end", () => {
    console.log("completed body:", body);
    const parsed = JSON.parse(body);
    console.log(parsed);
    res.end("ok");
  });
});

server.listen(3001, () => {
  console.log("Server running on port 3001");
});
