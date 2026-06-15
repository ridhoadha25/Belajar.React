import { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import TodoForm from "../components/TodoForm.jsx";
import TodoList from "../components/TodoList.jsx";
import FilterBar from "../components/FilterBar.jsx";
import Stats from "../components/Stats.jsx";
import Footer from "../components/Footer.jsx";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saved = localStorage.getItem("todos");

    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    );
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, text: newText }
          : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "active")
      return !todo.completed;

    if (filter === "completed")
      return todo.completed;

    return true;
  });

  return (
    <div className="app">

      <div className="card">

        <Header />

        <Stats todos={todos} />

        <TodoForm addTodo={addTodo} />

        <FilterBar
          filter={filter}
          setFilter={setFilter}
        />

        <TodoList
          todos={filteredTodos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />

      </div>

      <Footer />

    </div>
  );
}

export default App;
