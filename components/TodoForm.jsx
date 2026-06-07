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
        placeholder="Tambah tugas..."
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <button>
        Tambah
      </button>
    </form>
  );
}

export default TodoForm;