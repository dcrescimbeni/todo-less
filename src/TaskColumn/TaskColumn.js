import AddItem from '../AddItem/AddItem';

export default function TaskColumn({
  todoList,
  handleAdd,
  taskDescription,
  handleDescriptionChange,
  taskDuration,
  handleDurationChange,
  handleToggledTask,
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
              <input
                type="checkbox"
                name="completedStatus"
                id="completedStatus"
                checked={element.completed}
                onChange={(e) =>
                  handleToggledTask(element.id, e.target.checked)
                }
              />
              {element.description}, duration: {element.duration}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
