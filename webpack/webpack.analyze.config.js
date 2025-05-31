const production = require("./webpack.prod.config");

const { merge } = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge(production, {
  //   mode: 'production',
  //   devtool: 'source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "server",
      //   reportFilename: "bundle-report.html",
      openAnalyzer: true,
      //   generateStatsFile: true,
      //   statsFilename: "bundle-stats.json",
      //   logLevel: "info",
    }),
  ],
});
