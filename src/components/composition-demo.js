/*global document:false*/
import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import {VictoryAxis} from "victory-axis";
import {VictoryLine} from "victory-line";

const style = {
  parent: {
    width: 500,
    height: 500,
    margin: 50
  }
};

class CompositionDemo extends React.Component {

  render() {
    return (
      <div className="demo">
        <h3> Composition Example </h3>
        <svg style={style.parent}>
          <VictoryAxis
            style={_.merge({
              axis: {strokeWidth: 2},
              tickLabels: {fontSize: 12}
            }, style)}
            orientation="bottom"
            domain={[0, 20]}
            label="Time in microseconds"
            standalone={false}/>

          <VictoryAxis
            style={_.merge({
              axis: {stroke: "orange", strokeWidth: 2},
              ticks: {stroke: "orange"},
              tickLabels: {fontSize: 12}
            }, style)}
            orientation="left"
            domain={[-200, 200]}
            label="Low Frequency"
            standalone={false}/>

          <VictoryAxis
            style={_.merge({
              axis: {stroke: "blue", strokeWidth: 2},
              ticks: {stroke: "blue"},
              tickLabels: {fontSize: 12}
            }, style)}
            orientation="right"
            domain={[-0.8, 0.8]}
            label="High Frequency"
            standalone={false}/>

          <VictoryLine
            style={_.merge({
              data: {stroke: "orange", strokeWidth: 2}
            }, style)}
            y={(x) => 200 * Math.exp(-0.05 * x) * Math.sin(x)}
            interpolation="basis"
            domain={{
              x: [0, 20],
              y: [-200, 200]
            }}
            standalone={false}/>

          <VictoryLine
            style={_.merge({
              data: {stroke: "blue", strokeWidth: 1}
            }, style)}
            y={(x) => 0.8 * Math.exp(-0.5 * x) * Math.sin(10 * x)}
            interpolation="basis"
            samples={500}
            domain={{
              x: [0, 20],
              y: [-0.8, 0.8]
            }}
            standalone={false}/>
        </svg>
      </div>
    );
  }
}

export default CompositionDemo;
