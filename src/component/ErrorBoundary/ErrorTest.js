import React from "react";

const ErrorTest = () => {
  const [state, setState] = React.useState({
    details: {
      name: "Shadab",
      age: 20,
      learning: "React",
    },
  });
  return (
    <div className='errorboundary'>
      <h2>{state.details}</h2>
    </div>
  );
};

export default ErrorTest;
