import { useState } from "react";

function DynamicTodo(){
    const [todos,setTodo] = useState(["Study", "Gym"]) ;
    const [text,setText] = useState("");
    function addTodo(){
        if(text.trim()==="") return;
        setTodo([...todos,text]);
        setText("");
    }
    function removeTodo(index){
        setTodo(todos.filter((_,i)=>i!=index));
    }
    return (
        <div>
            <h2>Your Tasks</h2>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Add new task"/>
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((item,index)=>(
                <li key={index}>{item}<button onClick={()=>removeTodo(index)} style={{ marginLeft: "10px" }}>Remove</button></li>
                ))}
            </ul>
        </div>
    );
}
export default DynamicTodo;