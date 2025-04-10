const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("<h1 style='color: darkblue;'>Welcome to my first Node.js App!</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("<h2 style='color: green;'>About: This is a simple server built using Node.js</h2>");
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end("<h3 style='color: red;'>404 - Page Not Found</h3>");
  }
});

server.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
