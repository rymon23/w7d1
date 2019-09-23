import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
// import { receiveTodo, receiveTodos } from "./actions/todo_actions";
import { receiveTodo, receiveTodos} from "./actions/todo_actions";

function Root() {
  return (
    <div>
      <div>

      </div>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo
  window.receiveTodos = receiveTodos
  ReactDOM.render(<Root />, root);
});



