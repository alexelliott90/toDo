import './App.css'
import ToDoEditor from "./toDoEditor";
import ToDoCreator from "./toDoCreator";

let testKey = 1
testKey = testKey.toString()

function App() {
   
  return (
    <div className="App">
      <h1>To do list</h1>
      <h3>Add a new item here, or edit the items below</h3>
      <ToDoCreator/>
      <hr class="solid"/>
      <ToDoEditor/>
    </div>
  );
}

export default App;
