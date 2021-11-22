import './App.css';
import TaskColumn from './TaskColumn/TaskColumn';
import TimeColumn from './TimeColumn/TimeColumn';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// let items = [
//   {
//     id: 1,
//     description: 'Design app prototype in Figma',
//     duration: 2,
//     completed: false,
//     color: 'EF4444',
//   },
//   {
//     id: 2,
//     description: 'Start React project',
//     duration: 1,z
//     completed: true,
//     color: 'F59E0B',
//   },
//   {
//     id: 3,
//     description: 'Implement first working prototype and push to Github',
//     duration: 4,
//     completed: false,
//     color: '3B82F6',
//   },
//   {
//     id: 4,
//     description: 'Celebrate with beer',
//     duration: 1,
//     completed: true,
//     color: '10B981',
//   },
// ];

// In case there are no items in localStorage (new user)
// create an empty key
if (!localStorage.getItem('todolist')) {
  localStorage.setItem('todolist', []);
}

let items = JSON.parse(localStorage.getItem('todolist'));

let colors = {
  red: 'EF4444',
  yellow: 'F59E0B',
  blue: '3B82F6',
  green: '10B981',
};

function App() {
  const [todoList, setTodoList] = useState(items);

  // Task related states
  const [taskId, setTaskId] = useState();
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDuration, setTaskDuration] = useState(1);
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [taskColor, setTaskColor] = useState(colors.blue);

  // General configuration related states
  const [timeStart, setTimeStart] = useState(9);

  // Utility functions
  function updateLocalStorage(newItems) {
    setTodoList(newItems);
    localStorage.setItem('todolist', JSON.stringify(newItems));
  }

  // Handles
  function handleAdd(description, duration, completed, color) {
    let uniqueId = uuidv4();

    const tasks = [
      ...todoList,
      {
        id: uniqueId,
        description: description,
        duration: duration,
        completed: completed,
        color: color,
      },
    ];
    updateLocalStorage(tasks);
    setTaskDescription('');
    setTaskDuration(1);
  }

  function handleEdit(id, newDescription, newDuration) {
    let current = [...todoList];

    let nextTasks = current.map((element) => {
      if (element.id === id) {
        return {
          id: element.id,
          description: newDescription,
          duration: newDuration,
          completed: element.completed,
          color: element.color,
        };
      } else {
        return element;
      }
    });

    console.log(nextTasks);
    updateLocalStorage(nextTasks);
  }

  function handleDelete(taskId) {
    let current = [...todoList];
    console.log(taskId);

    let nextTasks = current.filter((element) => {
      if (element.id !== taskId) {
        return true;
      } else {
        return false;
      }
    });

    updateLocalStorage(nextTasks);

    console.log('test delete');
  }

  function handleDescriptionChange(e) {
    setTaskDescription(e.target.value);
  }

  function handleDurationChange(e) {
    setTaskDuration(e.target.value);
  }

  // Handles opacity change for completed/pending tasks
  function handleToggledTask(taskId, completedStatus) {
    const newTodo = [...todoList];
    const targetTask = newTodo.find((element) => element.id === taskId);
    targetTask.completed = completedStatus;
    setTodoList(newTodo);
  }

  function handleColorChange(e) {
    setTaskColor(colors[e]);
  }

  function handleOnDragEnd(result) {
    const newList = [...todoList];
    const [reorderedTask] = newList.splice(result.source.index, 1);
    newList.splice(result.destination.index, 0, reorderedTask);

    updateLocalStorage(newList);
  }

  return (
    <div className="App">
      <TimeColumn
        todoList={todoList}
        setTodoList={setTodoList}
        handleOnDragEnd={handleOnDragEnd}
        taskColor={taskColor}
        timeStart={timeStart}
        handleAdd={handleAdd}
        handleToggledTask={handleToggledTask}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      {/* <TaskColumn
        todoList={todoList}
        handleAdd={handleAdd}
        taskDescription={taskDescription}
        handleDescriptionChange={handleDescriptionChange}
        taskDuration={taskDuration}
        handleDurationChange={handleDurationChange}
        handleToggledTask={handleToggledTask}
        taskColor={taskColor}
        handleColorChange={handleColorChange}
        handleOnDragEnd={handleOnDragEnd}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      /> */}
    </div>
  );
}

export default App;
