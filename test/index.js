require('../').then(function () {
  document.body.innerHTML += '<h1>DomReady!</h1>';
});

require('../custom-promise')(require('es6-promise').Promise).then(function () {
  document.body.innerHTML += '<h1>custom-promise: DomReady!</h1>';
});
