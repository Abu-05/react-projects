import { useState } from "react";
function ChildMessage({ sendToParent }){
    const [text,setText] = useState("");
    return(
        <div style={{ marginTop: "20px" }}>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Type Message"/>
            <button onClick={()=>sendToParent(text)}>Send to Parent</button>
        </div>
    );
}
export default ChildMessage;