const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "build"),
  assetsDir: "static",
  chainWebpack: config => {
    // remove the prefetch plugin
    config.plugins.delete('prefetch');
    // remove the preload plugin
    config.plugins.delete('preload');
  },
}