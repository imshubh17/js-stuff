import React, { useState, useEffect } from "react";
import axios from "axios";

const Cord = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMp = (e) => {
    console.log("mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMp);

    //cleanup code
    return () => {
      console.log("return unmount code");
      window.removeEventListener("mousemove", logMp);
    };
  }, []);

  return (
    <div className="App">
      <p>
        Position X:{x}, Y:{y}
      </p>
    </div>
  );
};

function Timer() {
  const [time, setTime] = useState(0);

  const incrt = () => setTime((prevTime) => prevTime + 1);

  useEffect(() => {
    // Update the document title using the browser API
    const interval = setInterval(incrt, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []); //effect when time value changes

  return (
    <div className="App">
      <p>Timer {time} sec</p>
    </div>
  );
}

const MyFetchData = () => {
  //const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [pid, setPid] = useState(1);
  const [bid, setBid] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${bid}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [bid]); //[]list for data fetch only once | pid based chages | all this is dependeces

  const handleButton = () => {
    setBid(pid);
  };

  return (
    <>
      <input type="text" value={pid} onChange={(e) => setPid(e.target.value)} />
      <button onClick={handleButton}>Fetch</button>
      <span>Note: post available from 1 to 100 only.</span>
      <p>Title : {post.title}</p>
      {/*<ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
        </ul>*/}
    </>
  );
};

function ClassCounter() {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(false);
  const [start, setStart] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]); //effect when count value changes

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>count {count}</button>
      <hr />
      <button onClick={() => setDisplay(!display)}>Toddle Display</button>
      {display && <Cord />}
      <hr />
      <button onClick={() => setStart(!start)}>Toggle time</button>
      {start && <Timer />}
      <hr />
      <MyFetchData />
    </div>
  );
}
export default ClassCounter;
