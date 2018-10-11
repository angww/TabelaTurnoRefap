import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import withAnalytics from './analytics.js';
import * as serviceWorker from './serviceWorker';

const Root = () => (
    <Switch>
      <Route path="/about" render={() => <div>ABOUT</div>} />
      <Route exact path="/" component={() => <App tableName="Refap23" />} />
      <Route exact path="/Reduc" component={() => <App tableName="Reduc" />} />
      <Route exact path="/Refap0" component={() => <App tableName="Refap0" />} />
      <Route exact path="/Refap23" component={() => <App tableName="Refap23" />} />
    </Switch>
  );
  
  const App2 = withRouter(withAnalytics(Root));
  
  const AppWithRouter = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App2 />
    </BrowserRouter>
  );
  
ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
