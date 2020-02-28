import React, { Component, Fragment } from 'react';
import AppContext from '../../context/AppContext';
import server from '../../resources/axios';
import { Loader } from '../../components';
import Calendar from '../../components/Calendar';
import * as S from './style'

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
      .get('/google/cal')
      .then(res => {
        this.setState({ events: res.data });
        // console.log(this.state);
      });
  };

  render() {
    return (
      <S.Wrapper>
      Horários esse mês
      <div>
        {this.state.events.length ? (
          <Calendar events={this.state.events} />
        ) : (
          <Loader />
        )}
      </div>
      </S.Wrapper>
    );
  }
}

CalendarView.contextType = AppContext;
export default CalendarView;
