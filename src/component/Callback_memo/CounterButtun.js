import React from "react";

const CounterButtun = ({ btnText, onClick }) => {
  console.log("render 1");
  return (
    <div>
      <button onClick={onClick}>{btnText}</button>
    </div>
  );
};

export default React.memo(CounterButtun);
