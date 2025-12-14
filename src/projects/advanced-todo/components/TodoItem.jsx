import styles from "../styles/todo.module.css";

function TodoItem({ todo, dispatch }) {
  return (
    <li className={styles.item}>
      <span
        className={todo.completed ? styles.completed : ""}
        onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}
      >
        {todo.text}
      </span>

      <button onClick={() => dispatch({ type: "DELETE", id: todo.id })}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
