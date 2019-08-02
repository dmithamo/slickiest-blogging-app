const http = require('http');

const startServer = () => {
  http
    .createServer((req, res) => {
      res.writeHead(200, { 'content-type': 'json' });
      res.end('Behold your response');
    })
    .listen(8124);
  // eslint-disable-next-line no-console
  console.log('Server started at port 8124');
};

startServer();
