const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",
  entry: "./src/js/index-dev.js",

  output: {
    filename: "bundle.js",
    publicPath: "/static/", // Ensures that the output files are served from the /static/ directory
  },
  devtool: "eval-source-map", // Generates source maps for easier debugging
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
          "style-loader",
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
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            // options: {
            //   importLoaders: 1,
            // },
          },
          "less-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        // order of loaders matters: right to left or bottom to top
        // sass-loader -> css-loader -> style-loader
        // This means:
        // 1. sass-loader compiles Sass to CSS.
        // 2. css-loader interprets @import and url() like import/require() and will resolve them.
        // 3. style-loader injects styles into the DOM.
      },

      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb //
            // if size is less than 10kb, it will be inlined as a base64 string
            // else it will be emitted as a separate file in the output directory
          },
        },
        generator: {
          filename: "./images/[name][ext]",
          // keeps the original file name and extension
        },
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enables Hot Module Replacement (HMR)
  ],

  // ...existing code...
});
