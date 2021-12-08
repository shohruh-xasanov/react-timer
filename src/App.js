import { useReducer } from 'react';
import './App.css';
import reducer from './reducer';

function App() {

    const [{ r, g, b}, dispatch] = useReducer(reducer, {
      r : 100,
      g : 100,
      b : 100
    })

  return (
    <div className="App" style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}>
    <h1>Hello world</h1>
      <div className="timer">
         <button onClick={()=>dispatch({type : "INC_R"})}>R+</button>
         <button onClick={()=>dispatch({type : "DIC_R"})}>R-</button>
         <button onClick={()=>dispatch({type : "INC_G"})}>G+</button>
         <button onClick={()=>dispatch({type : "DIC_G"})}>G-</button>
         <button onClick={()=>dispatch({type : "INC_B"})}>B+</button>
         <button onClick={()=>dispatch({type : "DIC_B"})}>B-</button>
      </div>
    </div>
  );
}

export default App;
