import React, { useState, useEffect } from "react";


const wsSoket = new WebSocket('ws://jsonplaceholder.typicode.com/todos/1')
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
  
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Example;
