/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/

// NAMESPACE OBJECT: ./src/styles/notification.module.css
var notification_module_namespaceObject = {};
__webpack_require__.r(notification_module_namespaceObject);
__webpack_require__.d(notification_module_namespaceObject, {
  notification: () => (_1)
});

;// ./src/styles/notification.module.css
// extracted by mini-css-extract-plugin
var _1 = "E0yvz8SDFF78Hbsu2uXH";


;// ./src/js/ui.js


function renderTodos(todos) {
  const renderedItemArray = todos.map(function (todo) {
    const className = todo.completed ? "completed" : "";
    const completionClass = todo.completed ? "checked" : "";
    return `
            <li data-id="${todo.id}" class="${className}">
                <span class="custom-checkbox">
                    <img class="check" src="./images/checkmark.svg" width="22" height="22"></img>
                    <input class="real-checkbox" type="checkbox" ${completionClass} />
                </span>
                <label>${todo.text}</label>
                <span class="delete"></span>
            </li>
        `;
  });
  document.querySelector(".todo-list").innerHTML = renderedItemArray.join("");
}

function clearNewTodoInput() {
  document.querySelector(".new-todo").value = "";
  showNotification()
}

function getTodoId(element) {
  return parseInt(
    element.dataset.id ||
      element.parentNode.dataset.id ||
      element.parentNode.parentNode.dataset.id,
    10
  );
}

function showNotification() {
  console.log(notification_module_namespaceObject);
  const notification = `<div class="${_1}"> Todo item added </div>`;
  document.body.innerHTML += notification;
  setTimeout(() => {
    // const notificationElement = document.querySelector(`.${styles.notification}`)
    // notificationElement.parentNode.removeChild(notificationElement)
  }, 2000);
}

;// ./src/todos.json
const todos_namespaceObject = /*#__PURE__*/JSON.parse('[{"id":1560865205317,"text":"Buy eggs","completed":false},{"id":1560865205318,"text":"Do 15 min exercise","completed":false}]');
;// ./src/js/data.js


const data = todos_namespaceObject;

function getAllTodos() {
  return data;
}

function addTodo(todo) {
  data.push(todo);
}

function removeTodo(id) {
  data = data.filter(function (item) {
    return item.id !== id;
  });
}

function updateTodo(id, completed) {
  const itemIndex = data.findIndex(function (value) {
    return value.id === id;
  });
  data[itemIndex].completed = completed;
}

;// ./src/js/event-handlers.js



function onLoadEventHandler() {
  renderTodos(getAllTodos());
}

function newTodoEventHandler(event) {
  let text = event.target.value;
  addTodo({
    id: Date.now(),
    text: text,
    completed: false,
  });
  renderTodos(getAllTodos());
  clearNewTodoInput();
}

function removeTodoEventHandler(event) {
  const id = getTodoId(event.target);
  removeTodo(id);
  renderTodos(getAllTodos());
}

function toggleTodoEventListener(event) {
  const id = getTodoId(event.target);
  const isCompleted = event.target.checked;
  updateTodo(id, isCompleted);
  renderTodos(getAllTodos());
}

;// ./src/js/index.js



window.addEventListener("load", onLoadEventHandler);
document.addEventListener("change", function (event) {
  if (event.target.classList.contains("new-todo")) {
    newTodoEventHandler(event);
  }
});
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    removeTodoEventHandler(event);
  }
  if (event.target.classList.contains("real-checkbox")) {
    toggleTodoEventListener(event);
  }
});

/******/ })()
;