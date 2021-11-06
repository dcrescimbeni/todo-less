import AddItem from '../AddItem/AddItem';

export default function TaskColumn({
  todoList,
  handleAdd,
  handleDescriptionChange,
  taskDescription,
}) {
  return (
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
  );
}
