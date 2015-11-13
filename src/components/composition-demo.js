/*global document:false*/
import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import {VictoryAxis, VictoryLine} from "victory";

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
            width={500}
            height={500}
            style={{
              axis: {strokeWidth: 2},
              tickLabels: {fontSize: 12}
            }}
            orientation="bottom"
            domain={[0, 20]}
            label="Time in microseconds"
            standalone={false}/>

          <VictoryAxis
            width={500}
            height={500}
            style={{
              axis: {stroke: "orange", strokeWidth: 2},
              ticks: {stroke: "orange"},
              tickLabels: {fontSize: 12}
            }}
            orientation="left"
            domain={[-200, 200]}
            label="Low Frequency"
            standalone={false}/>
          <VictoryAxis
            width={500}
            height={500}
            style={{
              axis: {stroke: "blue", strokeWidth: 2},
              ticks: {stroke: "blue"},
              tickLabels: {fontSize: 12}
            }}
            orientation="right"
            domain={[-0.8, 0.8]}
            label="High Frequency"
            standalone={false}/>

          <VictoryLine
            width={500}
            height={500}
            style={{data: {stroke: "orange", strokeWidth: 2}}}
            y={(x) => 200 * Math.exp(-0.05 * x) * Math.sin(x)}
            interpolation="basis"
            domain={{
              x: [0, 20],
              y: [-200, 200]
            }}
            standalone={false}/>

          <VictoryLine
            width={500}
            height={500}
            style={{data: {stroke: "blue", strokeWidth: 1}}}
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
