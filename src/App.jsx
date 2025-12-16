import AuthApp from "./projects/auth-app";
import { AuthProvider } from "./projects/auth-app/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <AuthApp />
    </AuthProvider>
  );
}

export default App;
