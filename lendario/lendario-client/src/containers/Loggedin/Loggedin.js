import React, { Component, Fragment } from 'react';
import AppContext from '../../context/AppContext';
import server from '../../resources/axios';
import { Loader } from '../../components';
import Calendar from '../../components/Calendar';

class Loggedin extends Component {
  state = {
    events: {}
  };
  componentDidMount = async () => {
    await this.context.validateUser();
    this.loadCalendarEvents();
  };

  loadCalendarEvents = () => {
    server(window.localStorage.crpt)
      .get('/google/cal')
      .then(res => {
        this.setState({ events: res.data });
        // console.log(this.state);
      });
  };

  render() {
    return (
      <Fragment>
        {this.state.events.length ? (
          <Calendar events={this.state.events} />
        ) : (
          <Loader />
        )}
      </Fragment>
    );
  }
}

Loggedin.contextType = AppContext;
export default Loggedin;
