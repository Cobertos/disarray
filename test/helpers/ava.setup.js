require('jsdom-global')();

const Vue = require('vue');
Vue.config.devtools = false; // Disabe Devtools extension tip log message
Vue.config.productionTip = false;

const hooks = require('require-extension-hooks');
hooks('vue').plugin('vue').push();
hooks('vue-block-test').push(c => c); // Need to hook tests even if no transform so they read
// Removed Nuxt's default babel, no reason we need it for tests