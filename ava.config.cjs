module.exports = () => {
  return {
    require: ['module-alias/register', './test/helpers/ava.setup.js'],
    ignoredByWatcher: ['!**/*.{js,vue}'],
    babel: true,
    verbose: true,
    color: true
  }
}
