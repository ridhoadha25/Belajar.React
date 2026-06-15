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
          style={{
            flex: 1,
            padding: "8px 12px",
            border: "2px solid #3b82f6",
            borderRadius: "8px",
            marginRight: "10px"
          }}
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
            <i className="fas fa-check"></i>
            Simpan
          </button>
        ) : (
          <button
            onClick={() =>
              setEditing(true)
            }
          >
            <i className="fas fa-pen"></i>
            Edit
          </button>
        )}

        <button
          onClick={() =>
            deleteTodo(todo.id)
          }
        >
          <i className="fas fa-trash"></i>
          Hapus
        </button>

      </div>

    </div>
  );
}

export default TodoItem;
