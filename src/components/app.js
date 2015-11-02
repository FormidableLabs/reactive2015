import React from "react";
import { connect } from "react-redux";
import Radium from "radium";
import _ from "lodash";

import Sidebar from "react-sidebar";

@connect(state => state.data)
@Radium
class App extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.message} and reloads</h1>
        <button style={styles}>Click Me</button>
        <div>
          "Root. Console."
        </div>
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
