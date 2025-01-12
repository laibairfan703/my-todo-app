import React, { useState } from "react";

function TodoItem({ todo, onDelete, onToggleDone, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.task);

  const handleSave = () => {
    const trimmedText = editText.trim();
    if (trimmedText) {
      onUpdate(todo.id, trimmedText);
      setIsEditing(false);
    } else {
      alert("Task cannot be empty!");
    }
  };

  return (
    <div className="todo-item" style={{ textDecoration: todo.done ? "line-through" : "none" }}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleSave} className="edit-button">
            Save
          </button>
        </div>
      ) : (
        <div>
          <p>{todo.task}</p>
          <button onClick={() => onToggleDone(todo.id)} className="done-button">
            {todo.done ? "Undo" : "Done"}
          </button>
          <button onClick={() => setIsEditing(true)} className="edit-button">
            Edit
          </button>
          <button onClick={() => onDelete(todo.id)} className="delete-button">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
