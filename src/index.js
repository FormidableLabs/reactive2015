// React Core
import React from 'react';
import ReactDOM from 'react-dom';
// React Router
import { Router, Route, Link } from 'react-router';
// React Redux
import { Provider, connect } from 'react-redux';
// Redux Devtools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import configureStore from "./store";

// Components
import App from "./components/app";
import LineDemo from "./components/line-demo";
import ScatterDemo from "./components/scatter-demo";
import PieDemo from "./components/pie-demo";
import CompositionDemo from "./components/composition-demo.js"

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Route path="/" component={App}>
              <Route path="line" component={LineDemo}/>
              <Route path="scatter" component={ScatterDemo}/>
              <Route path="pie" component={PieDemo}/>
              <Route path="composition" component={CompositionDemo}/>
            </Route>
          </Router>
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    )
  }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
