import * as styles from "../styles/notification.module.css";
import CheckMarkImage from "../../images/checkmark.svg";

console.log(CheckMarkImage);

import jss from "jss";
import preset from "jss-preset-default";
import { getMotivationalImages } from "./api";
jss.setup(preset());

const checkboxSize = "30px";

const jssStyles = {
  realCheckbox: {
    width: checkboxSize,
    height: checkboxSize,
    cursor: "pointer",
    opacity: "0",
    position: "absolute",
    top: "-3px",
    left: "-5px",
  },
};

const { classes } = jss.createStyleSheet(jssStyles).attach();

export function renderTodos(todos) {
  const renderedItemArray = todos.map(function (todo) {
    const className = todo.completed ? "completed" : "";
    const completionClass = todo.completed ? "checked" : "";
    return `
            <li data-id="${todo.id}" class="${className}">
                <span class="custom-checkbox">
                    <img class="check" src="${CheckMarkImage}" width="22" height="22"></img>
                    <input data-elements="real-element" class="${classes.realCheckbox}" type="checkbox" ${completionClass} />
                </span>
                <label>${todo.text}</label>
                <span class="delete"></span>
            </li>
        `;
  });
  document.querySelector(".todo-list").innerHTML = renderedItemArray.join("");
  renderMotivationalImages();
}

export function clearNewTodoInput() {
  document.querySelector(".new-todo").value = "";
  showNotification();
}

export function getTodoId(element) {
  return parseInt(
    element.dataset.id ||
      element.parentNode.dataset?.id ||
      element.parentNode.parentNode.dataset?.id,
    10
  );
}

function showNotification() {
  // console.log(styles);
  // const notification = `<div class="${styles.notification}"> Todo item added </div>`;
  // document.body.innerHTML += notification;

  const notification = document.createElement("div");
  notification.classList.add("alert", "alert-success", styles.notification);
  notification.setAttribute("role", "alert");
  notification.innerHTML = "Todo item added";
  document.body.appendChild(notification);

  // setTimeout(() => {
  //   const notificationElement = document.querySelector(`.${styles.notification}`)
  //   notificationElement.parentNode.removeChild(notificationElement)
  // }, 2000);
}

function renderMotivationalImages(images) {
  getMotivationalImages().then((images) => {
    const motivationalPicturesHtml = `
                <div class="motivational-pictures">
                ${images
                  .map(
                    (image) =>
                      `<img src="${image}" alt="Motivational Image" class="motivational-image">`
                  )
                  .join("")}
                </div>
            `;

    document.querySelector(".motivational-pictures-container").innerHTML =
      motivationalPicturesHtml;
  });
}
