// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { ButtonCreateComponent } from "./components/ButtonCreate";
import { TodoCounterComponent } from "./components/TodoCounter";
import { TodoListComponent } from "./components/TodoList";
import { TodoSearchComponent } from "./components/TodoSearch";

const todos = [
  { id: 1, description: "Tarea", status: true },
  { id: 2, description: "Tarea 2", status: false },
];

function App() {
  return (
    <>
      <div>
        <TodoCounterComponent></TodoCounterComponent>
        <TodoSearchComponent></TodoSearchComponent>
        <TodoListComponent todos={todos}></TodoListComponent>
        <ButtonCreateComponent></ButtonCreateComponent>
      </div>
    </>
  );
}

export default App;
