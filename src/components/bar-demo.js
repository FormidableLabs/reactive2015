/*global document:false*/
import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import {VictoryAxis, VictoryLine, VictoryBar} from "victory";

class CompositionDemo extends React.Component {

  render() {
    return (

      <VictoryChart domainPadding={{x: 30, y: 30}}>
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
          tickFormat={(x) => x + "\ntick"}
          style={{data: {
            axis: {stroke: "black", strokeWidth: 2},
            ticks: {stroke: "transparent"},
            tickLabels: {fill: "black"}
          }}}/>
        <VictoryAxis label="y axis" dependentAxis
          tickValues={[0, 1.5, 3, 4.5]}
          style={{data: {
            grid: {strokeWidth: 1},
            axis: {stroke: "transparent"},
            ticks: {stroke: "transparent", padding: 15}
          }}}/>
        <VictoryBar style={{data: {width: 15, fill: "orange"}}}
          data={[
            {x: 1, y: 1},
            {x: 2, y: 2},
            {x: 3, y: 3},
            {x: 4, y: 2},
            {x: 5, y: 1},
            {x: 6, y: 2},
            {x: 7, y: 3},
            {x: 8, y: 2},
            {x: 9, y: 1},
            {x: 10, y: 2},
            {x: 11, y: 3},
            {x: 12, y: 2},
            {x: 13, y: 1}
          ]}/>
      <VictoryLine y={() => 0.5}
        style={{data: {stroke: "gold", strokeWidth: 3}}}
        label="LINE"/>
    </VictoryChart>

    );
  }
}

export default CompositionDemo;