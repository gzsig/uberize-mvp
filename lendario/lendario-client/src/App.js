import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Navbar, GoogleAuth } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={GoogleAuth} />
      </Switch>
    </div>
  );
}

export default App;
