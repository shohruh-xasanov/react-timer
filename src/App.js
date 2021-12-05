import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0)
  const [count, setCount] = useState(false)
  const userRef = useRef(0)

  const startTimer = () => {
    setCount(!count)
    
  }
  const stopTimer = () => {
    clearInterval(userRef.current)
    localStorage.setItem('count', counter)
    setCount(!count)
  }
  const resetTimer = () => {
    setCount(false)
    setCounter(0)
  }
  useEffect (()=>{
    setCounter( +localStorage.getItem('count'))
  }, [])

  useEffect (()=>{
    localStorage.setItem('count', counter)
  }, [counter])

  useEffect (()=>{
    if(count){
      userRef.current = setInterval (()=>{
        setCounter(prev=>prev + 1)
      }, 1000)
    }
    return ()=>{
      userRef.current && clearInterval(userRef.current)
      userRef.current =0
    }
  }, [count])

  return (
    <div className="App">
    <h1>Timer : {counter}</h1>
      <div className="timer">
          {
            !count ? 
            <button
            style={{background: 'blue'}}
            onClick={startTimer}
            >Start</button> : 
            <button
            style={{background: 'red'}}
            onClick={stopTimer}
            >Stop</button>
          }
          <button
            style={{background: 'green'}}
          onClick={resetTimer}
          >Reset</button>
      </div>
    </div>
  );
}

export default App;
