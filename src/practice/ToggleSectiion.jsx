import { useState } from "react";
function ToggleSection(){
    const [show,setShow] = useState(true);
    return(
        <div style={{ marginTop: "20px" }}>
            <button onClick={()=>setShow(s=>!s)}>{show?"Hide Text":"Show Text"}</button>
            {show && <p>This text is conditionally rendered.</p>}
        </div>
    );
}
export default ToggleSection;