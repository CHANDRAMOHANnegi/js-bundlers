const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "bundle.js",
  },

  // ...existing code...
  devServer: {
    port: 8000,
    static: {
      directory: path.resolve(__dirname, "../dist"),
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true, //
    },
    client: {
      overlay: true,
    },
    liveReload: false, //Reloads the entire browser page when files change.
    // hot: false, // Enables Hot Module Replacement (HMR): updates only changed modules in place, without a full page reload.
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ["style-loader", "css-loader"],
        // style-loader injects styles into the DOM,
        // css-loader interprets @import and url() like import/require() and will resolve them.
      },
      {
              test: /\.css$/,
              include: /\.module\.css$/,
              use: [
                'style-loader',
                {
                  loader: "css-loader",
                  options: {
                    modules: {
                      localIdentName: "[local]--[md4:hash:7]",
                      // exportLocalsConvention: "camelCase",
                    },
                  },
                },
              ],
            },
    ],
  },

  // ...existing code...
});
