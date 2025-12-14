import { useReducer } from "react";
import { todoReducer } from "../reducer/todoReducer";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import styles from "../styles/todo.module.css";

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Advanced Todo App</h2>
      <TodoInput dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default TodoApp;
