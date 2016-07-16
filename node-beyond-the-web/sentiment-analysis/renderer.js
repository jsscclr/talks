'use strict';

const fs = require('fs');

function view(templateName, values, response) {
  let fileContents = fs.readFileSync(`./views/${templateName}.html`, {
    encoding: 'utf8'
  });
  response.write(fileContents);
}

module.exports.view = view;
