import TodoItem from "./TodoItem";
import styles from "../styles/todo.module.css";

function TodoList({ todos, dispatch }) {
  return (
    <ul className={styles.list}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          dispatch={dispatch}
        />
      ))}
    </ul>
  );
}

export default TodoList;
