import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Login, Onboarding } from './containers';
import { Navbar, Loader } from './components';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/onboarding' component={Onboarding} />
        <Route exact path='/teste' component={Loader} />
      </Switch>
    </AppProvider>
  );
}

export default App;
