const sentiment = require('sentiment');

module.exports = function(text) {
  return sentiment(text);
};
