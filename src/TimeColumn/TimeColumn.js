export default function TimeColumn({ todoList }) {
  return (
    <div className="timeColumn column">
      <ul>
        {todoList.map((element) => {
          return (
            <li key={element.id}>
              {element.description}, duration: {element.duration}, completed:{' '}
              {element.completed ? 'yes' : 'no'}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
