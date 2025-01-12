import React, { useState } from "react";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // Add a new task
  const addTodo = (task) => {
    if (task) {
      setTodos([...todos, { id: Date.now(), task, done: false }]);
    }
  };

  // Delete a task
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle task done/undo
  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // Update a task
  const updateTodo = (id, updatedTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: updatedTask } : todo
      )
    );
  };

  return (
    <div className="app-container">
      <h1>To-Do App</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggleDone={toggleDone}
        onUpdate={updateTodo}
      />
    </div>
  );
}

export default App;
