import './App.css';
import TimeColumn from './TimeColumn/TimeColumn';
import Footer from './Footer/Footer';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Default starting time
let defaultStartingTime = 9;

// In case there are no items in localStorage (new user)
// create an empty key
if (!localStorage.getItem('todolist')) {
  localStorage.setItem('todolist', '[]');
}

let startingTime;

if (!localStorage.getItem('startingTime')) {
  localStorage.setItem('startingTime', defaultStartingTime);
  startingTime = defaultStartingTime;
} else {
  startingTime = localStorage.getItem('startingTime');
}

let items = JSON.parse(localStorage.getItem('todolist'));

function App() {
  const [todoList, setTodoList] = useState(items);

  // General configuration related states
  const [timeStart, setTimeStart] = useState(startingTime);

  // Dialog function useState
  const [showDialog, setShowDialog] = useState(false);

  // Utility functions
  function updateLocalStorage(newItems) {
    setTodoList(newItems);
    localStorage.setItem('todolist', JSON.stringify(newItems));
  }

  function updateStartingTime(newStartingTime) {
    setTimeStart(newStartingTime);
    localStorage.setItem('startingTime', newStartingTime);
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
  }

  function handleEdit(id, newDescription, newDuration, newColor) {
    let current = [...todoList];

    let nextTasks = current.map((element) => {
      if (element.id === id) {
        return {
          id: element.id,
          description: newDescription,
          duration: newDuration,
          completed: element.completed,
          color: newColor,
        };
      } else {
        return element;
      }
    });

    updateLocalStorage(nextTasks);
  }

  function handleDelete(taskId) {
    let result = window.confirm('Do you want to delete the task?');

    if (result) {
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
    }
  }

  // Handles opacity change for completed/pending tasks
  function handleToggledTask(taskId, completedStatus) {
    const newTodo = [...todoList];
    const targetTask = newTodo.find((element) => element.id === taskId);
    targetTask.completed = completedStatus;
    setTodoList(newTodo);
    updateLocalStorage(newTodo);
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
        handleOnDragEnd={handleOnDragEnd}
        timeStart={timeStart}
        handleAdd={handleAdd}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        handleToggledTask={handleToggledTask}
        updateLocalStorage={updateLocalStorage}
        updateStartingTime={updateStartingTime}
      />
      <Footer></Footer>
    </div>
  );
}

export default App;
