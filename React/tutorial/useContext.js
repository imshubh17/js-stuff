//App.js
import React from "react";
import CA from "./components/CA";
/*
Context provides a way to pass data through the component tree without
having to pass props down manually at every level.
*/
export const UserContext = React.createContext();
export const SubjectContext = React.createContext();

export default function App() {
  return (
    <div className="App">
      <h1>App View</h1>
      <UserContext.Provider value={"imshubh17"}>
        <SubjectContext.Provider value={"Reactjs"}>
          <CA />
        </SubjectContext.Provider>
      </UserContext.Provider>
    </div>
  );
}


//CA.js
import React from "react";
import CB from "./CB";

export default function CA() {
  return (
    <>
      <h3>CA</h3>
      <CB />
    </>
  );
}


//CB.js
import React, { useContext } from "react";
import { UserContext, SubjectContext } from "../App";

export default function CB() {
  const user = useContext(UserContext);
  const subject = useContext(SubjectContext);
  return (
    <>
      <h3>CB</h3>
      <p>
        {user}, {subject}
      </p>
    </>
  );
}
