import { useLocalStorage } from "./useLocalstorage";

function UsernameSaver() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <p>Saved: {name}</p>
    </div>
  );
}
export default UsernameSaver;
