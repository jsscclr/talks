const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Hello Node.js Server!');
};

const server = http.createServer(requestHandler);

server.listen(port, (error) => {
  if (error) {
    return console.error('Something bad happened :(', error);
  }

  console.info(`server is listening on ${port}`);
});

