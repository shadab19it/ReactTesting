import React from "react";
import CounterButtun from "./CounterButtun";

const CallbackMemo = () => {
  const [count, setCount] = React.useState(0);

  const Increment = React.useCallback(() => {
    setCount((c) => c + 1);
  }, [setCount]);
  const decrement = React.useCallback(() => {
    setCount((c) => c - 1);
  }, [setCount]);
  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", paddingTop: "100px", alignItems: "center" }}>
      <CounterButtun btnText='Increment' onClick={Increment} />
      <h3>{count}</h3>
      <CounterButtun btnText='Decerement' onClick={decrement} />
    </div>
  );
};

export default CallbackMemo;
