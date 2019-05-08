import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import withAnalytics from "./analytics.js";
import * as serviceWorker from "./serviceWorker";

//import LogRocket from 'logrocket';
//LogRocket.init('vdf1vy/project-test1');

const Root = () => (
  <Switch>
    <Route path="/about" render={() => <div>ABOUT</div>} />
    <Route exact path="/" component={() => <App tableName="Refap0" />} />
    <Route exact path="/Reduc" component={() => <App tableName="Reduc" />} />
    <Route exact path="/Refap0" component={() => <App tableName="Refap0" />} />
    <Route exact path="/Refap" component={() => <App tableName="Refap" />} />
    <Route exact path="/Teste4" component={() => <App tableName="Teste4" />} />
  </Switch>
);

const App2 = withRouter(withAnalytics(Root));

const AppWithRouter = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App2 />
  </BrowserRouter>
);

ReactDOM.render(<AppWithRouter />, document.getElementById("root"));

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
