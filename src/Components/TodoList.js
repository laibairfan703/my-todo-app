import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete, onToggleDone, onUpdate }) {
  return (
    <div className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggleDone={onToggleDone}
            onUpdate={onUpdate}
          />
        ))
      ) : (
        <p className="no-tasks">No tasks available. Add one!</p>
      )}
    </div>
  );
}

export default TodoList;
