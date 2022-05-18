const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page');
  }
  if (req.url === '/about') {
    res.end('Here is about our short history');
  }
  if (req.url === '/error') {
    res.end(`
    <html>
    <h1>Oops!</h1>
    <p>We can't seem the page you are looking for</p>
    <a href="/">back home</a>
    </html>
    `);
  }
  res.end();
});

server.listen(5000);
