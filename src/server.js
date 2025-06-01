const express = require("express");
const expressStaticGzip = require("express-static-gzip");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

if (process.env.NODE_ENV === "dev") {
  const WebpackDevMiddleware = require("webpack-dev-middleware");
  const config = require("../webpack/webpack.dev.config.js");
  const webpack = require("webpack");
  const compiler = webpack(config);

  app.use(WebpackDevMiddleware(compiler, config.devServer.devMiddleware));

  const webpackHotMiddleware = require("webpack-hot-middleware");
  app.use(webpackHotMiddleware(compiler));
}

app.get("/", (req, res) => {
  const absolutePathToHtmlFile = path.resolve(__dirname, "../dist/index.html");

  res.sendFile(absolutePathToHtmlFile);
});

app.use("/static", expressStaticGzip(path.join(__dirname, "../dist")));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app; // Export the app for testing purposes
