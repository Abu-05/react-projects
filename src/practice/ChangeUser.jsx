import { useContext } from "react";
import UserContext from "./UserContext";

function ChangeUser() {
  const { setUser } = useContext(UserContext);

  return (
    <button onClick={() => setUser("Ali")}>
      Change User to Ali
    </button>
  );
}

export default ChangeUser;
