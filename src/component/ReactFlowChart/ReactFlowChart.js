import React from "react";
import "./ReactFlowChart.scss";
import ReactFlow, { Handle, NodeComponentProps, HandleProps } from "react-flow-renderer";
import { CustomSortlNode, CustomNodeComponent, CustomLabelNode } from "./CustomNode";
import { AiFillFilter } from "react-icons/ai";

const customNodeStyles = {
  background: "#9CA8B3",
  color: "#FFF",
  padding: 10,
};
const elements = [
  {
    id: "1",
    type: "labelNode",
    position: { x: 440, y: 50 },
    data: {
      title: "Filter",
      icon: <AiFillFilter />,
      className: "filter-node",
    },
    sourcePosition: "bottom",
  },
  {
    id: "2",
    type: "labelNode",
    position: { x: 466, y: 206 },
    data: {
      title: "Project",
      className: "project-label",
    },
    sourcePosition: "bottom",
    tragetPosition: "top",
  },
  {
    id: "7",
    type: "labelNode",
    position: { x: 300, y: 900 },
    data: {
      title: "Project",
      className: "project-label",
    },
    sourcePosition: "bottom",
    tragetPosition: "top",
  },
  {
    id: "3",
    type: "labelNode",
    position: { x: 447, y: 342 },
    data: {
      title: "Exchange",
      icon: <AiFillFilter />,
      className: "exchange-label",
    },
    sourcePosition: "bottom",
    tragetPosition: "top",
  },
  {
    id: "10",
    type: "labelNode",
    position: { x: 48, y: 345 },
    data: {
      title: "Exchange",
      icon: <AiFillFilter />,
      className: "exchange-label",
    },
    sourcePosition: "bottom",
    tragetPosition: "top",
  },
  {
    id: "8",
    type: "labelNode",
    position: { x: 200, y: 780 },
    data: {
      title: "SORT MERGE JOIN",
      icon: <AiFillFilter />,
      className: "sort-merg-join",
      targPoint_1: "20%",
      targPoint_2: "80%",
    },
    sourcePosition: "bottom",
    tragetPosition: "top",
  },
  {
    id: "9",
    type: "labelNode",
    position: { x: 226, y: 1011 },
    data: {
      title: "HASH AGGREGATE",
      icon: <AiFillFilter />,
      className: "aggrigate-label",
    },
    sourcePosition: "bottom",
    tragetPosition: "top",
  },
  {
    id: "4",
    type: "sortNode",
    position: { x: 418, y: 506 },
    data: {
      label: "Sort",
      title: "Peak Memory",
      icon: <AiFillFilter />,
      className: "sort-node",
      duration: "44 sec",
    },
    sourcePosition: "bottom",
    tragetPosition: "top",
  },
  {
    id: "5",
    type: "sortNode",
    position: { x: 17, y: 506 },
    data: {
      label: "Sort",
      title: "Peak Memory",
      icon: <AiFillFilter />,
      className: "sort-node",
      duration: "44 sec",
    },
    sourcePosition: "bottom",
    tragetPosition: "top",
  },
  {
    id: "e1-1",
    source: "1",
    target: "2",
    type: "straight",
    label: "10 M rows",
    style: { stroke: "#333" },
    arrowHeadType: "arrowclosed",
    labelBgPadding: [20, 6],
    labelBgBorderRadius: 10,
    labelStyle: {
      fontSize: "12px",
      fontWeight: "500",
      color: "#a5aec0",
    },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: "straight",
    style: { stroke: "#333" },
    arrowHeadType: "arrowclosed",
  },
  {
    id: "e4-8",
    source: "4",
    target: "8",
    targetHandle: "b",
    type: "smoothegde",
    style: { stroke: "#333" },
    arrowHeadType: "arrowclosed",
  },
  {
    id: "e5-8",
    source: "5",
    target: "8",
    targetHandle: "a",
    type: "smoothegde",
    style: { stroke: "#333" },
    arrowHeadType: "arrowclosed",
  },
  {
    id: "e8-7",
    source: "8",
    target: "7",
    targetHandle: "a",
    type: "straight",
    style: { stroke: "#333" },
    arrowHeadType: "arrowclosed",
  },
  {
    id: "e7-9",
    source: "7",
    target: "9",
    targetHandle: "a",
    type: "straight",
    style: { stroke: "#333" },
    arrowHeadType: "arrowclosed",
  },
  {
    id: "e10-5",
    source: "10",
    target: "5",
    type: "straight",
    style: { stroke: "#333" },
    arrowHeadType: "arrowclosed",
    label: "255 K",
    labelBgPadding: [20, 6],
    labelBgBorderRadius: 10,
    labelStyle: {
      fontSize: "12px",
      fontWeight: "500",
      color: "#a5aec0",
    },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    type: "straight",
    label: "229.8 M",
    style: { stroke: "#333" },
    arrowHeadType: "arrowclosed",
    labelBgPadding: [20, 6],
    labelBgBorderRadius: 10,
    labelStyle: {
      fontSize: "12px",
      fontWeight: "500",
      color: "#a5aec0",
      backgroundColor: "#f0f2f5",
    },
  },
];

const nodeTypes = {
  labelNode: CustomLabelNode,
  sortNode: CustomSortlNode,
};

const ReactFlowChart = () => {
  const onNodeDragStop = (event, node) => console.log("drag stop", node);
  const onElementClick = (event, node) => console.log("on ele clcik", node);
  return (
    <div className='flow-chart-wrapper'>
      <section className='sec-two'>
        <h2 className='header'>React flow Chart , Ex-two</h2>
        <div style={{ height: 600 }} className='flow-chart'>
          <ReactFlow onNodeDragStop={onNodeDragStop} onElementClick={onElementClick} elements={elements} nodeTypes={nodeTypes} />
        </div>
      </section>
    </div>
  );
};

export default ReactFlowChart;
