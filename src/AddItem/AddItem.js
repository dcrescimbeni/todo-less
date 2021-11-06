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
        autoComplete="off"
      />
      <input
        type="text"
        value={taskDuration}
        name="itemDuration"
        id="itemDuration"
        placeholder="Duration"
        onChange={handleDurationChange}
        autoComplete="off"
      />
      <input type="button" value="Add" onClick={handleAdd} />
    </div>
  );
}
