import React from "react";
import "./TodoList.css"
const TodoListComponent = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <li className="TodoItem" key={todo.id}>
        <span className={`Icon Icon-check ${todo.status && 'Icon-check--active'}`}>
        √
      </span>
      <p className={`TodoItem-p ${todo.status && 'TodoItem-p--complete'}`}>
        {todo.description}
      </p>
      <span className="Icon Icon-delete">
        X
      </span>
      </li>
    ))}
  </ul>
);
export { TodoListComponent };
