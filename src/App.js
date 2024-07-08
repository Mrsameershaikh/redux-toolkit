import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center mt-5">
      <AddTodo/>
      <Todos/>
    </div>
  );
}

export default App;
