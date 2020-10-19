import React, { useReducer } from "react";
import "./styles.css";

import ObjRd from "./components/ObjRd";

export const CounterContext = React.createContext();

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

export default function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        <h2>Count - {count}</h2>
        <ObjRd />
      </div>
    </CounterContext.Provider>
  );
}

// Count.js
import React, { useContext } from "react";
import { CounterContext } from "../App";

export default function Count() {
  const CountContext = useContext(CounterContext);
  return (
    <>
      <br />
      <button onClick={() => CountContext.countDispatch("incr")}>Incr</button>
      <br />
      <button onClick={() => CountContext.countDispatch("decr")}>Decr</button>
      <br />
      <button onClick={() => CountContext.countDispatch("reset")}>Reset</button>
    </>
  );
}

