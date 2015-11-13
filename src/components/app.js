import React from "react";
import { connect } from "react-redux";
import Radium from "radium";
import _ from "lodash";
import {Link} from "react-router";

@connect(state => state.data)
@Radium
class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Reactive 2015 Victory Demo</h1>
        <Link style={{marginRight: 30}} to="/pie">Pie</Link>
        <Link style={{marginRight: 30}} to="/line">Line</Link>
        <Link style={{marginRight: 30}} to="/scatter">Scatter</Link>
        <Link style={{marginRight: 30}} to="/composition">Composition</Link>
        {this.props.children}
      </div>
    );
  }
}

var styles = {
  backgroundColor: `hsla(${Math.random() * 255}, 50%, 50%, ${Math.random()})`,
  padding: '5px',
  color: 'white',
  border: 0,
  ':hover': {
    backgroundColor: 'blue'
  }
};

export default App;













































