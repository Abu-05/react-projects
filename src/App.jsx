import TimerRef from "./practice/TimeRef";
import Navbar from "./pages/Navbar";
import ChangeUser from "./ChangeUser";
import CounterReducer from "./practice/CounterReducer";
import TodoReducerApp from "./practice/TodoReducerApp";
import UsernameSaver from "./practice/UsernameSaver";

function App() {
  return (
    <div>
      <TimerRef/>
      <Navbar/>
      <ChangeUser/>
      <CounterReducer/>
      <TodoReducerApp/>
      <UsernameSaver/>
    </div>
  );
}

export default App;
