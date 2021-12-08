
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import usePrevious from './hooks/usePrevious';

function App() {

  const [count, setCount] = useLocalStorage(0, "count") // 1ga o'zgardi
  const previous = usePrevious(count) // 1ga o'zgardi

  return (
    <div className="App" >
    <h1>Hello world: {count}</h1>
    <h1>Previous Hello world: {previous}</h1>
      <div className="timer">
         <button onClick={()=> setCount(prev=> prev +1)}>Incriment+</button>
         <button onClick={()=> setCount(prev=> prev -1)}>Decriment-</button>
      </div>
    </div>
  );
}

export default App;
