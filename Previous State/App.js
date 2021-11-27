import { useEffect, useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
  });
  const prevCount = prevCountRef.current;
  return (
    <center>
      <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h3>
       current value :{count} <br/>  previous value:{prevCount}
      </h3>
    </div>
    </center>
  );
}

export default App;