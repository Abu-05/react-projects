import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef();

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} placeholder="Click button to focus me" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
