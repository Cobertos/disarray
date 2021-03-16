require('jsdom-global')();

const Vue = require('vue');
Vue.config.devtools = false; // Disabe Devtools extension tip log message
Vue.config.productionTip = false;

const hooks = require('require-extension-hooks');
hooks('vue').plugin('vue');
hooks(['vue', 'js'])
  .exclude(({ filename }) => filename.match(/\/node_modules\//))
  .plugin('babel');