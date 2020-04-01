import React, { Component } from 'react';
import AppContext from '../../context/AppContext';
import server from '../../resources/axios';
import { Loader } from '../../components';
import { Calendar } from '../../components';
import * as G from '../../resources/globalStyle';

class CalendarView extends Component {
  state = {
    events: {}
  };
  componentDidMount = async () => {
    await this.context.validateUser();
    this.loadCalendarEvents();
  };

  loadCalendarEvents = () => {
    server(window.localStorage.crpt)
      .get('/google/cal/events')
      .then(res => {
        this.setState({ events: res.data });
        // console.log(this.state);
      });
  };

  render() {
    return (
      <G.Wrapper>
        <G.Frame>
          <G.PgTitle>Horários esse mês</G.PgTitle>
          {this.state.events.length ? (
            <Calendar events={this.state.events} />
          ) : (
            <Loader />
          )}
        </G.Frame>
      </G.Wrapper>
    );
  }
}

CalendarView.contextType = AppContext;
export default CalendarView;
