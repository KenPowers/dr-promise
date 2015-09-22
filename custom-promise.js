module.exports = function(Promise) {
  return new Promise(require('domready'));
};
