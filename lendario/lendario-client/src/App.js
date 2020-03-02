import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import {
  Login,
  Onboarding,
  CalendarView,
  Profile,
  NewEvent,
  EditEvent
} from './containers';
import { Navbar, Loader } from './components';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/le/onboarding' component={Onboarding} />
        <Route exact path='/le/calendario' component={CalendarView} />
        <Route exact path='/le/:username' component={Profile} />
        <Route exact path='/le/:username/evento' component={NewEvent} />
        <Route exact path='/le/:username/evento/:id' component={EditEvent} />
        <Route exact path='/teste' component={Loader} />
      </Switch>
    </AppProvider>
  );
}

export default App;
