/*global document:false */
/*global window:false */
import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import {VictoryChart, VictoryAxis, VictoryLine} from "victory";

class LineDemo extends React.Component {

  render() {
    return (
      <div>
        <h3>Victory Line Graph</h3>
        <VictoryChart
          width={500}
          height={350}>
          <VictoryAxis dependentAxis style={{grid: {strokeWidth: 1}}}/>
          <VictoryLine
            data={
              _.map(_.range(20), (i) => {
                return { x: i, y: Math.random() };
              })
            }
            style={{
              data: {stroke: "darkgrey", strokeWidth: 1}
            }}/>
        </VictoryChart>
      </div>
    );
  }
}

export default LineDemo;
