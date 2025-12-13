import { useState } from "react";
function Counter(){
    const [counter,setCounter] = useState(0);
    function increment(){
        setCounter(n => n+1);
    }
    function decrement(){
        setCounter(n => n-1);
    }
    return (
         <div style={{ margin: "20px", padding: "10px", border: "1px solid #ddd" }}>
            <h2>Counter {counter}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement} style={{ marginLeft: "10px" }}>-</button>
        </div>
    );
}
export default Counter;