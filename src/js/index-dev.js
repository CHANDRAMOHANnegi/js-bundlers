import "webpack-hot-middleware/client"; // Enables hot reloading in development mode
import { renderApp } from ".";

if (module.hot) {
  module.hot.accept("./index.js", () => {
    console.log("Accepting the updated index.js module!");
    renderApp();
  });
}
