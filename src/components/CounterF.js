import React, { useState, useEffect } from "react";

function CounterF({ color }) {
  // const [count, setCount] = useState(5);
  // const [name, setName] = useState("Erik");

  const [state, setState] = useState({
    count: 5,
    name: "Erik",
  });

  const turnOnEngines = () => {
    console.log("turn on engines!!! ");
  };

  const sayHi = () => {
    alert(state.name);
  };

  const handleClickyClickUp = () => {
    console.log("increment this!");

    // Update the sate
    setState({ ...state, count: state.count + 1 });
  };

  const handleClickyClickDown = () => {
    console.log("increment this!");

    // Update the sate
    setState({ ...state, count: state.count - 2 });
  };

  useEffect(() => {
    // gets called as soon as component is mounted onto the dom/screen
    console.log("component did mount");

    turnOnEngines();

    // maybe do some data fetching from some api

    return () => {
      // get called when the component gets removed from dom/screen
      console.log("component will unmount");

      // do clean up here
    };
  }, []); // the dep array simulates componentDidUpdate

  return (
    <div>
      <h1>Counter F</h1>
      <h2>{state.name}'s Class</h2>
      <div style={{ fontSize: "60px" }}>{state.count}</div>
      <button onClick={handleClickyClickUp}>Increment</button>
      <button onClick={handleClickyClickDown}>Decrement by 2</button>

      <button onClick={sayHi} style={{ color: color }}>
        Greet
      </button>
    </div>
  );
}

export default CounterF;
