import './App.css'
import ToDoEditor from "./components/toDoEditor";
import ToDoCreator from "./components/toDoCreator";
import { useSelector} from "react-redux"

let testKey = 1
testKey = testKey.toString()

function App() {
  const toDoList = useSelector((state) => state.toDo) 

  function toDoListCount(){
    let count = 0
    for(let items in toDoList.data){
      count = count + 1
    }
    return count
  }


  return (
    <div className="App">
      <h1>To do list</h1>
      <h3>There are currently <strong>{toDoListCount()} items</strong> in the list</h3>
      <h3>Add a new item here, or edit the items below</h3>
      <ToDoCreator/>
      <hr class="solid"/>
      <ToDoEditor/>
    </div>
  );
}

export default App;
