import './App.css';
import TaskColumn from './TaskColumn/TaskColumn';
import { useState } from 'react';

let items = [
  { id: 1, description: 'item1', duration: 1, completed: false },
  { id: 2, description: 'item2', duration: 2, completed: true },
  { id: 3, description: 'item3', duration: 1, completed: false },
  { id: 4, description: 'item4', duration: 1, completed: false },
  { id: 5, description: 'item5', duration: 4, completed: true },
];

function App() {
  const [todoList, setTodoList] = useState(items);

  // Task related states
  const [taskId, setTaskId] = useState(6);
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDuration, setTaskDuration] = useState(1);
  const [taskCompleted, setTaskCompleted] = useState(false);

  // Handles
  function handleAdd() {
    let nextId = taskId + 1;
    setTaskId(nextId);

    const tasks = [
      ...todoList,
      {
        id: taskId,
        description: taskDescription,
        duration: taskDuration,
        completed: false,
      },
    ];
    setTodoList(tasks);
    setTaskDescription('');
    setTaskDuration(1);
  }

  function handleDescriptionChange(e) {
    setTaskDescription(e.target.value);
  }

  function handleDurationChange(e) {
    setTaskDuration(e.target.value);
  }

  return (
    <div className="App">
      <div className="timeColumn column">
        <ul>
          {todoList.map((element) => {
            return <li key={element.id}>{element.description}</li>;
          })}
        </ul>
      </div>
      <TaskColumn
        todoList={todoList}
        handleAdd={handleAdd}
        taskDescription={taskDescription}
        handleDescriptionChange={handleDescriptionChange}
        taskDuration={taskDuration}
        handleDurationChange={handleDurationChange}
      />
    </div>
  );
}

export default App;
