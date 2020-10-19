import React from "react";
/*
useReducer is a hook that is used for state management. 
It is an alternative to useState
useReducer(currentState, action)
*/

export default function App() {
  return (
    <div className="App">
      <h1>App View</h1>  
    </div>
  );
}

//example1 : Count.js
import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "incr":
      return state + 1;
    case "decr":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function Count() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>Count - {count}</h2>
      <br />
      <button onClick={() => dispatch("incr")}>Incr</button>
      <br />
      <button onClick={() => dispatch("decr")}>Decr</button>
      <br />
      <button onClick={() => dispatch("reset")}>Reset</button>
    </>
  );
}

//example2 :ObjRd.js
import React, { useReducer } from "react";

const initialState = {
  firstCount: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case "incr":
      return { firstCount: state.firstCount + action.value };
    case "decr":
      return { firstCount: state.firstCount - 1 };
    case "reset":
      return initialState;
    default:
      return { firstCount: state.firstCount };
  }
};

export default function ObjRd() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>Count - {count.firstCount}</h2>
      <br />
      <button onClick={() => dispatch({ type: "incr", value: 1 })}>Incr</button>
      <br />
      <button onClick={() => dispatch({ type: "incr", value: 5 })}>
        Incr 5
      </button>
      <br />
      <button onClick={() => dispatch({ type: "decr" })}>Decr</button>
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}
