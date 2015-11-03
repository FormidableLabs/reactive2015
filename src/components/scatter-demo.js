/*global document:false */
/*global window:false */
import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import {VictoryChart} from "victory-chart";
import {VictoryAxis} from "victory-axis";
import {VictoryLine} from "victory-line";
import {VictoryScatter} from "victory-scatter";

class ScatterDemo extends React.Component {

  render() {
    return (
      <div>
        <h3>Victory Scatter</h3>
        <VictoryChart>
          <VictoryAxis dependentAxis orientation="right"/>
          <VictoryAxis orientation="top"/>
          <VictoryScatter
            size="1"
            y={(x) => x * x}
            style={
              {
                data: {
                  stroke: "red"
                }
              }
            }
            />
        </VictoryChart>
      </div>
    );
  }
}

export default ScatterDemo;
