import { useState } from "react";

function TodoItem({
  todo,
  deleteTodo,
  toggleTodo,
  editTodo
}) {

  const [editing, setEditing] =
    useState(false);

  const [newText, setNewText] =
    useState(todo.text);

  const saveEdit = () => {
    editTodo(todo.id, newText);
    setEditing(false);
  };

  return (
    <div className="todo-item">

      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() =>
          toggleTodo(todo.id)
        }
      />

      {editing ? (
        <input
          value={newText}
          onChange={(e) =>
            setNewText(e.target.value)
          }
        />
      ) : (
        <span
          className={
            todo.completed
              ? "completed"
              : ""
          }
        >
          {todo.text}
        </span>
      )}

      <div className="actions">

        {editing ? (
          <button
            onClick={saveEdit}
          >
            Simpan
          </button>
        ) : (
          <button
            onClick={() =>
              setEditing(true)
            }
          >
            Edit
          </button>
        )}

        <button
          onClick={() =>
            deleteTodo(todo.id)
          }
        >
          Hapus
        </button>

      </div>

    </div>
  );
}

export default TodoItem;