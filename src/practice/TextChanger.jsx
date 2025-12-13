import { useState } from "react";

function TextChanger() {
  const [text, setText] = useState("Hello");

  function changeText() {
    setText("Welcome to React!");
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>{text}</h2>
      <button onClick={changeText}>
        Change Text
      </button>
    </div>
  );
}

export default TextChanger;
