export default function AddItem({
  handleAdd,
  taskDescription,
  handleDescriptionChange,
  taskDuration,
  handleDurationChange,
}) {
  return (
    <div>
      <input
        type="text"
        value={taskDescription}
        name="itemDescription"
        id="itemDescription"
        placeholder="Description"
        onChange={handleDescriptionChange}
      />
      <input
        type="text"
        value={taskDuration}
        name="itemDuration"
        id="itemDuration"
        placeholder="Duration"
        onChange={handleDurationChange}
      />
      <input type="button" value="Add" onClick={handleAdd} />
    </div>
  );
}
