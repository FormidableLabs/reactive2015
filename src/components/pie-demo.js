/*global document:false */
/*global window:false */
import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import {VictoryPie} from "victory";

class PieDemo extends React.Component {

  render() {
    return (
      <div>
        <h3>Victory Pie</h3>
        <VictoryPie
          endAngle={90}
          innerRadius={140}
          padAngle={5}
          startAngle={-90}/>
      </div>
    );
  }
}

export default PieDemo;
