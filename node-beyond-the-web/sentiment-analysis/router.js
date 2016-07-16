'use strict';
const commonHeaders = { 'Content-Type': 'text/html' };
const url = require('url');
const renderer = require('./renderer.js');
const twitterSearch = require('./logic/twitterSearch.js');
const twitterSearchEmacs = require('./logic/twitterSearchEmacs.js');
const rita = require('./logic/rita.js');
const qs = require('querystring');
const multiparty = require('multiparty');
const thoughtLeaders = require('./logic/thought-leaders.js');

const router = (request, response) => {
  if (request.url === '/') {
    if (request.method === 'GET') {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      renderer.view("index", {}, response);
      response.end();
    }
  } else if (request.url === '/search') {
    var form = new multiparty.Form();
    form.parse(request, function (error, fields, files) {
      twitterSearch(fields.username[0], (data) => {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(data));
      });
    });
  } else if (request.url === '/death-battle') {
    var form = new multiparty.Form();
    form.parse(request, function (error, fields, files) {
      twitterSearchEmacs(fields.username[0], (data) => {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(data));
      });
    });
  } else if (request.url === '/rita') {
    var form = new multiparty.Form();
    form.parse(request, function (error, fields, files) {
      rita(fields.sentence[0], (data) => {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(data));
      });
    });
  } else if (request.url === '/thought-leaders') {
    var form = new multiparty.Form();
    form.parse(request, function (error, fields, files) {
      thoughtLeaders(fields.javascripter[0], (data) => {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(data));
      });
    });
    
  } else {
    console.log("Whoops");
  }
};

module.exports = router;
