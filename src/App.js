import './App.css';

let todoList = ['item1', 'item2', 'item3'];

function App() {
  return (
    <div className="App">
      <ul>
        {todoList.map((element) => {
          return <li>test</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
