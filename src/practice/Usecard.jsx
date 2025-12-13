function Usecard({name,age}){
    return (
        <div style={{
      border: "1px solid #ccc",
      margin: "10px",
      padding: "10px",
      borderRadius: "8px"}}>
        <h2>{name}</h2>
        <p>{age}</p>
      </div>
    );
}
export default Usecard;