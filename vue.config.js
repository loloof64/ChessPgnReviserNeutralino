const path = require("path");

module.exports = {
  publicPath: '/resources',
  outputDir: path.resolve(__dirname, "resources"),
  assetsDir: "static",
  chainWebpack: config => {
    // remove the prefetch plugin
    config.plugins.delete('prefetch');
    // remove the preload plugin
    config.plugins.delete('preload');
  },
}