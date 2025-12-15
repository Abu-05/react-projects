import { useReducer, useState } from "react";
import { todoReducer } from "../reducer/todoReducer";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import styles from "../styles/todo.module.css";

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [filter, setFilter] = useState("ALL");

  const filteredTodos = todos.filter(todo => {
    if (filter === "ACTIVE") return !todo.completed;
    if (filter === "COMPLETED") return todo.completed;
    return true; // ALL
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Advanced Todo App</h2>

      <TodoInput dispatch={dispatch} />

      {/* Filter Buttons */}
      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => setFilter("ALL")}>All</button>
        <button onClick={() => setFilter("ACTIVE")}>Active</button>
        <button onClick={() => setFilter("COMPLETED")}>Completed</button>
      </div>

      <TodoList todos={filteredTodos} dispatch={dispatch} />
    </div>
  );
}

export default TodoApp;
