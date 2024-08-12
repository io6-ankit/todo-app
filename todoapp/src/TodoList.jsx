import React, { useState } from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
// import uuid from "uuid";
import "./TodoList.css";
const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "create todo app", completed: false },
    { id: 2, task: "create a git repo name Todo", completed: true },
  ]);
  // create Todo function
  const create = (newTodo) => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };
  // remove Todo function
  const remove = (id) => {
    console.log("id", id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // update Todo function
  const update = (id, updtedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  // toggleComplete Todo function
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const todosList = todos.map((todo) => (
    <Todo
      toggleComplete={toggleComplete}
      update={update}
      remove={remove}
      key={todo.id}
      todo={todo}
    />
  ));
  return (
    <>
      <div className="TodoList">
        <h1> Todo List</h1>
        <NewTodoForm createTodo={create} />
        <ul>{todosList}</ul>
      </div>
    </>
  );
};
export default TodoList;
