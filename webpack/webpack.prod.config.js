const common = require("./webpack.common.config.js");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizePlugin = require("css-minimizer-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const glob = require("glob");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "js/[name].[contenthash:12].js",
  },
  optimization: {
    minimize: true,
    minimizer: [
      `...`, // This spreads the existing minimizers, if any
      new CssMinimizePlugin({
        parallel: true,
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
              // normalizeUrl: false,
            },
          ],
        },
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["imagemin-mozjpeg", { quality: 40, progressive: true }],
              ["imagemin-pngquant", { quality: [0.65, 0.9], speed: 4 }],
              ["imagemin-gifsicle", { interlaced: false }],
              [
                "imagemin-svgo",
                {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          removeViewBox: false,
                          addAttributes: {
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                        },
                      },
                    },
                  ],
                },
              ],
              ["imagemin-optipng", { optimizationLevel: 5 }],
              ["imagemin-webp", { quality: 75 }],
            ],
          },
        },
        generator: [
          {
            type: "asset",
            preset: "webp-custom-name",
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: ["imagemin-webp"],
              // keeps the original file name and extension
            },
          },
        ],
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.css$/,
        include: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[hash:base64]",
                // exportLocalsConvention: "camelCase",
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            // options: {
            //   importLoaders: 1,
            // },
          },
          "postcss-loader",
          "sass-loader",
        ],
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
          filename: "./images/[name][contenthash:12][ext]",
          // keeps the original file name and extension
        },
        // use: [
        //   {
        //     loader: "image-webpack-loader",
        //     options: {
        //       mozjpeg: {
        //         progressive: true,
        //         quality: 40,
        //       },
        //       // optipng: {
        //       //   enabled: false, // OptiPNG is not used
        //       // },
        //       pngquant: {
        //         quality: [0.65, 0.9],
        //         speed: 4,
        //       },
        //       // gifsicle: {
        //       //   interlaced: false,
        //       // },
        //       // webp: {
        //       //   quality: 75,
        //       // },
        //     },
        //   },
        // ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:12].css",
    }),
    new PurgeCSSPlugin({
      paths: (context) => {
        return glob.sync(`${path.join(__dirname, "../src")}/**/*`, {
          nodir: true,
        });
      },
      // safelist: {
      //   standard: [
      //     "alert",
      //     "alert-success",
      //     "notification",
      //     "custom-checkbox",
      //     "check",
      //     "real-checkbox",
      //     "todo-list",
      //     "new-todo",
      //   ],
      // },
    }),
  ],
});
