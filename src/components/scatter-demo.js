/*global document:false */
/*global window:false */
import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import * as V from "victory";

class ScatterDemo extends React.Component {

  render() {
    return (
      <div>
        <h3>Victory Scatter</h3>
        <V.VictoryChart>
          <V.VictoryAxis dependentAxis orientation="right"/>
          <V.VictoryAxis orientation="top"/>
          <V.VictoryScatter
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
        </V.VictoryChart>
      </div>
    );
  }
}

export default ScatterDemo;
