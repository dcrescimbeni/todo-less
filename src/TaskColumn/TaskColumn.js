import AddItem from '../AddItem/AddItem';

export default function TaskColumn({
  todoList,
  handleAdd,
  taskDescription,
  handleDescriptionChange,
  taskDuration,
  handleDurationChange,
}) {
  return (
    <div className="taskColumn column">
      <AddItem
        handleAdd={handleAdd}
        taskDescription={taskDescription}
        handleDescriptionChange={handleDescriptionChange}
        taskDuration={taskDuration}
        handleDurationChange={handleDurationChange}
      />
      <ul>
        {todoList.map((element) => {
          return (
            <li key={element.id}>
              {element.description}, duration: {element.duration}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
