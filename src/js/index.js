import '../scss/index.scss';

const template = require('./templates/test-relative-template.handlebars');

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('main').innerHTML = template({child: 'child', relative: 'relative'});
});