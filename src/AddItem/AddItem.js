export default function AddItem({
  handleAdd,
  handleDescriptionChange,
  taskDescription,
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
      <input type="button" value="Add" onClick={handleAdd} />
    </div>
  );
}
