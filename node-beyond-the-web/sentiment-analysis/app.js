const http = require('http');
const port = 3000;
const router = require('./router.js');
const url = require('url');

const requestHandler = (request, response) => {
  router(request, response);
};

const server = http.createServer(requestHandler);

server.listen(port, (error) => {
  if (error) {
    return console.error('Something bad happened :(', error);
  }
  console.info(`server is listening on ${port}`);
});
