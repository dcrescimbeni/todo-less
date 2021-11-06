import './App.css';

let todoList = [
  { id: 1, desc: 'item 1', duration: 1 },
  { id: 2, desc: 'item 2', duration: 1 },
  { id: 3, desc: 'item 3', duration: 3 },
  { id: 4, desc: 'item 4', duration: 1 },
  { id: 5, desc: 'item 5', duration: 2 },
  { id: 6, desc: 'item 6', duration: 1 },
];

function App() {
  return (
    <div className="App">
      <div className="timeColumn column">
        <ul>
          {todoList.map((element) => {
            return <li key={element.id}>{element.desc}</li>;
          })}
        </ul>
      </div>
      <div className="taskColumn column">
        <ul>
          {todoList.map((element) => {
            return <li key={element.id}>{element.desc}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
