import './App.css';
import TaskColumn from './TaskColumn/TaskColumn';
import TimeColumn from './TimeColumn/TimeColumn';
import { useState } from 'react';

let items = [
  {
    id: 1,
    description: 'Design app prototype in Figma',
    duration: 2,
    completed: false,
    color: 'EF4444',
  },
  {
    id: 2,
    description: 'Start React project',
    duration: 1,
    completed: true,
    color: 'F59E0B',
  },
  {
    id: 3,
    description: 'Implement first working prototype and push to Github',
    duration: 4,
    completed: false,
    color: '3B82F6',
  },
  {
    id: 4,
    description: 'Celebrate with beer',
    duration: 1,
    completed: true,
    color: '10B981',
  },
];

function App() {
  const [todoList, setTodoList] = useState(items);

  // Task related states
  const [taskId, setTaskId] = useState(6);
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDuration, setTaskDuration] = useState(1);
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [taskColor, setTaskColor] = useState('blue');

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
        color: taskColor,
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

  function handleToggledTask(taskId, completedStatus) {
    const newTodo = [...todoList];
    const targetTask = newTodo.find((element) => element.id === taskId);
    targetTask.completed = completedStatus;
    setTodoList(newTodo);
  }

  function handleOnDragEnd(result) {
    const newList = [...todoList];
    const [reorderedTask] = newList.splice(result.source.index, 1);
    newList.splice(result.destination.index, 0, reorderedTask);

    setTodoList(newList);
  }

  return (
    <div className="App">
      <TimeColumn
        todoList={todoList}
        setTodoList={setTodoList}
        handleOnDragEnd={handleOnDragEnd}
      />
      <TaskColumn
        todoList={todoList}
        handleAdd={handleAdd}
        taskDescription={taskDescription}
        handleDescriptionChange={handleDescriptionChange}
        taskDuration={taskDuration}
        handleDurationChange={handleDurationChange}
        handleToggledTask={handleToggledTask}
        handleOnDragEnd={handleOnDragEnd}
      />
    </div>
  );
}

export default App;
