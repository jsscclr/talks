const sentiment = require('sentiment');

module.exports = function(text) {
  return sentiment(text, {
    'cats': 5,
    'emacs': 100000,
    'node': 20,
    'vim': -1000,
    'sublime': -2344534
  });
};
