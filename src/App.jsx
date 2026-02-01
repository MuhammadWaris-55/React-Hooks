import './App.css'
import { useState, useEffect, useRef, useCallback, useMemo, useReducer } from 'react';
import useToggle from './components/useToggle';


function App() {

  const [count, setcount] = useState(0);
  //usestate is a variable which we can use in our DOM and we can change it
  // here the value is the name of state 
  // setvalue is the function from which we can change the state
  // useState(0) is the value of state


  // Run on every Render
  // useEffect(() => {
  //   console.log("I will run on every render");
  // })

  //This will run only on first render
  useEffect(() => {
    console.log("Welcome! / I will run only on first render");
  }, [])

  //this will run only when the certain values changed
  useEffect(() => { //this will run when the count will be changed
    console.log("Count was changed!");
  }, [count])


  const inputRef = useRef(0);

  const focusinput = () => {
    inputRef.current.focus();
    inputRef.current.placeholder = "Enter something";
  }


  // const double = count * 2;

  const double = useMemo(() => {
    return count * 2;
  }, [count])


  function Button({ onClick }) {
    console.log("Button rendered");
    return <button onClick={onClick}>Click</button>;
  }


  const handleClick = useCallback(() => {
    console.log("Clicked")
  }, [])



  const [value, toggleValue] = useToggle(true);

  return (
    <>
      <h2>Double: {double}</h2>
      <div className="count">{count}</div>
      <button onClick={() => { setcount(count + 1) }}>click me</button>

      <Button onClick={handleClick} /> <br /><br />

      <input type='text' ref={inputRef} />
      <button onClick={focusinput}>Focus On Input</button> <br /> <br />

      {
        value ? <h2>Using Custom Hook Here</h2> : null
      }
      <button onClick={toggleValue}>Hide/Show</button>

    </>
  );
}

export default App;
