import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Login, Onboarding } from './containers'
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/onboarding" component={Onboarding} />
      </Switch>
    </div>
  );
}

export default App;
