import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Vote from './Components/Vote';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/vote" component={Vote} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
