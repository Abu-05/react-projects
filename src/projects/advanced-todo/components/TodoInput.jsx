import { useState } from "react";
import styles from "../styles/todo.module.css";

function TodoInput({ dispatch }) {
  const [text, setText] = useState("");

  function addTodo() {
    if (text.trim() === "") return;
    dispatch({ type: "ADD", payload: text });
    setText("");
  }

  return (
    <div className={styles.inputBox}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default TodoInput;
