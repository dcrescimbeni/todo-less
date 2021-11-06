import './App.css';
import AddItem from './AddItem/AddItem';
import { useState } from 'react';

let items = ['item1', 'item2', 'item3', 'item4'];

function App() {
  const [todoList, setTodoList] = useState(items);
  const [taskDescription, setTaskDescription] = useState('');

  // Handles
  function handleAdd() {
    const tasks = [...todoList, taskDescription];
    setTodoList(tasks);
    setTaskDescription('');
  }

  function handleDescriptionChange(e) {
    setTaskDescription(e.target.value);
  }

  return (
    <div className="App">
      <div className="timeColumn column">
        <ul>
          {todoList.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      </div>
      <div className="taskColumn column">
        <AddItem
          handleAdd={handleAdd}
          handleDescriptionChange={handleDescriptionChange}
          taskDescription={taskDescription}
        />
        <ul>
          {todoList.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
