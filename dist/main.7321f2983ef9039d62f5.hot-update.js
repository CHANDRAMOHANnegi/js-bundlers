"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatewebpack_optimization_starter"]("main",{

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearNewTodoInput: () => (/* binding */ clearNewTodoInput),\n/* harmony export */   getTodoId: () => (/* binding */ getTodoId),\n/* harmony export */   renderTodos: () => (/* binding */ renderTodos)\n/* harmony export */ });\n/* harmony import */ var _styles_notification_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/notification.module.css */ \"./src/styles/notification.module.css\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jss-preset-default'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jss-preset-default'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());\n\nconst checkboxSize = \"30px\";\n\nconst jssStyles = {\n  realCheckbox: {\n    width: checkboxSize,\n    height: checkboxSize,\n    cursor: \"pointer\",\n    opacity: \"0\",\n    position: \"absolute\",\n    top: \"-3px\",\n    left: \"-5px\",\n  },\n};\n\nconst { classes } = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(jssStyles).attach();\n\nfunction renderTodos(todos) {\n  const renderedItemArray = todos.map(function (todo) {\n    const className = todo.completed ? \"completed\" : \"\";\n    const completionClass = todo.completed ? \"checked\" : \"\";\n    return `\n            <li data-id=\"${todo.id}\" class=\"${className}\">\n                <span class=\"custom-checkbox\">\n                    <img class=\"check\" src=\"./images/checkmark.svg\" width=\"22\" height=\"22\"></img>\n                    <input data-elements=\"real-element\" class=\"${classes.realCheckbox}\" type=\"checkbox\" ${completionClass} />\n                </span>\n                <label>${todo.text}</label>\n                <span class=\"delete\"></span>\n            </li>\n        `;\n  });\n  document.querySelector(\".todo-list\").innerHTML = renderedItemArray.join(\"\");\n}\n\nfunction clearNewTodoInput() {\n  document.querySelector(\".new-todo\").value = \"\";\n  showNotification();\n}\n\nfunction getTodoId(element) {\n  return parseInt(\n    element.dataset.id ||\n      element.parentNode.dataset.id ||\n      element.parentNode.parentNode.dataset.id,\n    10\n  );\n}\n\nfunction showNotification() {\n  // console.log(styles);\n  // const notification = `<div class=\"${styles.notification}\"> Todo item added </div>`;\n  // document.body.innerHTML += notification;\n\n  const notification = document.createElement(\"div\");\n  notification.classList.add(\"alert\", \"alert-success\", _styles_notification_module_css__WEBPACK_IMPORTED_MODULE_0__.notification);\n  notification.setAttribute(\"role\", \"alert\");\n  notification.innerHTML = \"Todo item added\";\n  document.body.appendChild(notification);\n\n  // setTimeout(() => {\n  //   const notificationElement = document.querySelector(`.${styles.notification}`)\n  //   notificationElement.parentNode.removeChild(notificationElement)\n  // }, 2000);\n}\n\n\n//# sourceURL=webpack://webpack-optimization-starter/./src/js/ui.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b17dd990ace488874247")
/******/ })();
/******/ 
/******/ }
);