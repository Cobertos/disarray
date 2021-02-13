module.exports = () => {
  return {
    require: ['esm', 'module-alias/register', './test/helpers/ava.setup.js'],
    ignoredByWatcher: ['!**/*.{js,vue}'],
    babel: true,
    verbose: true,
    color: true
  }
}
