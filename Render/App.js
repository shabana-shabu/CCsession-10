import { useEffect, useRef, useState } from "react";
 
function App() {

  const [count, setCount] = useState(0);
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    console.log(count);
  });

  const increment=() => {
    setCount((count) => count + 1);
  }
  return (
    <center>
      <div>
      <button onClick={increment}>+</button>
      <h1>{count}</h1> 
    </div></center>
  );
}

export default App;