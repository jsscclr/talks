const RiTa = require('rita');

module.exports = (text, callback) => {
  var rs = RiTa.RiString(text);
  callback(rs.features());
};
