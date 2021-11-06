import './App.css';
import TaskColumn from './TaskColumn/TaskColumn';
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
      <TaskColumn
        todoList={todoList}
        handleAdd={handleAdd}
        handleDescriptionChange={handleDescriptionChange}
        taskDescription={taskDescription}
      />
    </div>
  );
}

export default App;
