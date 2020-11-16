import React from "react";
import ReactFlow, { Handle, Background } from "react-flow-renderer";

export const CustomSortlNode = ({ data }) => {
  return (
    <div className='custom-sort-node'>
      <Handle type='target' id='a' style={{ top: "0%", opacity: "0" }} />
      <div className={`custom-node ${data.className}`} style={{ padding: " 0" }}>
        <div className='sort-header'>
          <div>
            <div className='icon'>{data.icon}</div>
            <div className='sort-label'>{data.label}</div>
          </div>
          <div className='sort-duration'>{data.duration}</div>
        </div>
        <div className='body'>
          <h3 className='body-title'>{data.title}</h3>
          <div className='table-row'>
            <div className='col'>
              <div className='col-label'>Total</div>
              <div className='col-value'>44MB</div>
            </div>
            <div className='col'>
              <div className='col-label'>AVG</div>
              <div className='col-value'>44</div>
            </div>
            <div className='col'>
              <div className='col-label'>MIN</div>
              <div className='col-value'>44</div>
            </div>
            <div className='col'>
              <div className='col-label'>MAX</div>
              <div className='col-value'>44</div>
            </div>
          </div>
        </div>
      </div>
      <Handle type='source' id='b' style={{ top: "95%", opacity: "0" }} />
    </div>
  );
};

export const CustomLabelNode = ({ data }) => {
  return (
    <div className='label-node'>
      <Handle type='target' id='a' style={{ top: "-5%", left: data.targPoint_1 || "50%", opacity: "0" }} />
      {data.targPoint_2 && <Handle type='target' id='b' style={{ top: "-5%", left: data.targPoint_2, opacity: "0" }} />}
      <div className={`custom-node ${data.className}`}>
        {data.icon && <div className='icon'>{data.icon}</div>} <div className='title'>{data.title}</div>
      </div>
      <Handle type='source' id='c' style={{ top: "95%", opacity: "0" }} />
    </div>
  );
};
