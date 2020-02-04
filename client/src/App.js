import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Loader from './components/Loader';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/google-auth' component={Loader}/>
      </Switch>
    </div>
  );
}

export default App;
