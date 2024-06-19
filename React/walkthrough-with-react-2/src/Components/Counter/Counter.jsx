import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1 className="count">{count}</h1>
        <div className="containerbtn">
          <button onClick={() => setCount(count + 1)} className="btn">
            Increment
          </button>
          <button onClick={() => setCount(count - 1)} className="btn">
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
