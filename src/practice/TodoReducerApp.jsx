import { useState, useReducer } from "react";
import { todoReducer } from "./todoReducer";

function TodoReducerApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState("");

  function addTodo() {
    if (text.trim() === "") return;
    dispatch({ type: "add", payload: text });
    setText("");
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Todo App</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new Task"
      />
      <button onClick={addTodo}>Add Task</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "10px"
              }}
              onClick={() => dispatch({ type: "toggle", id: todo.id })}
            >
              {todo.text}
            </span>

            <button onClick={() => dispatch({ type: "remove", id: todo.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoReducerApp;
