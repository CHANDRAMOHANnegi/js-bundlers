import { getTodoId, renderTodos, clearNewTodoInput } from "./ui";
import { addTodo, getAllTodos, removeTodo, updateTodo } from "./data";
import { capitalize } from "lodash-es";
import { trim } from "./helpers";
import $ from "jquery";

export function onLoadEventHandler() {
  renderTodos(getAllTodos());
}

export function newTodoEventHandler(event) {
  let text = event.target.value;
  text = text |> trim |> capitalize;
  addTodo({
    id: Date.now(),
    text: text,
    completed: false,
  });
  renderTodos(getAllTodos());
  clearNewTodoInput();
}

export function removeTodoEventHandler(event) {
  import(
    "bootstrap"
    /* webpackChunkName: "bootstrap" */
  ).then(({ Modal }) => {
    const id = getTodoId(event.target);
    if (!id) return;
    $("#modal-delete-button").data("todo-id", id);
    const deleteTodoModal = Modal.getOrCreateInstance(
      document.getElementById("modal-delete-todo")
    );
    deleteTodoModal.show();
  });
}

export function confirmRemoveEventHandler(event) {
  import(
    "bootstrap"
    /* webpackChunkName: "bootstrap" */
  ).then(({ Modal }) => {
    // Clean up the modal data to prevent memory leaks
    const id = $("#modal-delete-button").data("todo-id");
    if (!id) return;
    removeTodo(id);
    renderTodos(getAllTodos());
    const deleteTodoModal = Modal.getOrCreateInstance(
      document.getElementById("modal-delete-todo")
    );
    deleteTodoModal.hide();
  });
}

export function toggleTodoEventListener(event) {
  const id = getTodoId(event.target);
  const isCompleted = event.target.checked;
  updateTodo(id, isCompleted);
  renderTodos(getAllTodos());
}
