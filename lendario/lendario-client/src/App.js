import React from 'react';
import './App.css';
import GoogleAuth from './components/GoogleAuth';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={GoogleAuth} />
      </Switch>
    </div>
  );
}

export default App;
