import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './component/Home'
import Login from './component/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/login'} component={Login} />

        <Route path={'/'} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
