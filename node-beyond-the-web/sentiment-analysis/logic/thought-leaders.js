const RiTa = require('rita');

module.exports = (text, callback) => {
  var rm = new RiTa.RiMarkov(3);
    
  RiTa.RiTa.loadString(__dirname + '/' + text + '.txt', function (data) {
    rm.loadText(data);
    var sentences = rm.generateSentences(3);
    callback(sentences);
  });
};
