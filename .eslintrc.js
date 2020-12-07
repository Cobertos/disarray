module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'brace-style': ['error', 'stroustrup'],
    'semi': ['error', 'always'],
    'spaced-comment': 'off',
    'no-fallthrough': 'off',
    'space-before-function-paren': 'off',
    'lines-between-class-members': 'off',

    'vue/singleline-html-element-content-newline': 'off',
    'vue/require-default-prop': 'off', //It's perfectly valid to use the default 'undefined'
    'vue/no-reserved-keys': 'off' //TODO: I thought _ keys were non-reactive by standard, not reserved...
    'vue/require-component-is': 'off' //TODO: This doesn't handle :is="..."
  }
};
