import { useState } from "react";

function TodoForm({ addTodo }) {

  const [text, setText] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    addTodo(text);

    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="todo-form"
    >
      <input
        type="text"
        placeholder="Tambah tugas baru..."
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <button>
        <i className="fas fa-plus"></i>
        Tambah
      </button>
    </form>
  );
}

export default TodoForm;
