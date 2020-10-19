import React, { useState } from "react";

export default function ClassCounter() {
  const [Name, setName] = useState({ firstName: "", lastName: "" });
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <input
        placeholder="first name"
        onChange={(e) => setName({ ...Name, firstName: e.target.value })}
      />
      <input
        placeholder="last name"
        onChange={(e) => setName({ ...Name, lastName: e.target.value })}
      />
      <br />
      <p>
        Your Full Name : {Name.firstName} {Name.lastName} <br />{" "}
        {JSON.stringify(Name)}{" "}
      </p>
      <br />
      <button onClick={() => setItems([...items, Name.firstName])}>
        add name
      </button>
      <p>
        {items.map((item, k) => (
          <li key={k}>{item}</li>
        ))}
      </p>
      <button onClick={()=>setCount(count+1)}>count {count}</button>
    </div>
  );
}
