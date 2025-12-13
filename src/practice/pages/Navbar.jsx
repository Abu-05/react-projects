import { useContext } from "react";
import UserContext from "../practice/UserContext";

function Navbar() {
  const { user } = useContext(UserContext);

  return <h2>Welcome, {user}</h2>;
}

export default Navbar;
