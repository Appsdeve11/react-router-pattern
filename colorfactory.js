import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ColorsList from './ColorsList';
import ColorDetail from './ColorDetail';
import NewColorForm from './NewColorForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/colors" component={ColorsList} />
        <Route exact path="/colors/new" component={NewColorForm} />
        <Route exact path="/colors/:color" component={ColorDetail} />
        <Route exact path="/colors/blargh">
          <Redirect to="/colors" />
        </Route>
        <Route path="*">
          <Redirect to="/colors" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;