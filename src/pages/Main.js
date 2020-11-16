import React, { useEffect } from "react";
import "./Main.scss";

// imports components
// import ErrorBounday from "../component/ErrorBoundary/ErrorBounday";
import ErrorTest from "../component/ErrorBoundary/ErrorTest";
import AosAnimation from "../component/ReactSpring/AosAnimation";
import UseEffect from "../component/Hooks/UseEffect/UseEffect";
import ReactFlowChart from "../component/ReactFlowChart/ReactFlowChart";

const Main = () => {
  return (
    <div>
      <ReactFlowChart />
    </div>
  );
};

export default Main;
