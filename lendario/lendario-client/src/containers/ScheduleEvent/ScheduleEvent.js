import React, { Component, Fragment } from 'react';
import server from '../../resources/axios';
import * as G from '../../resources/globalStyle';
import * as S from './style';
import { SchedualCard, Loader } from '../../components';
import AppContext from '../../context/AppContext';

class ScheduleEvent extends Component {
  componentDidMount = () => {
    server()
      .get(`/patient/appointment/${this.props.match.params.id}`)
      .then(res => {
        this.context.updateState({ slots: res.data.slots });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Fragment>
        {this.context.state.slots.length ? (
          <G.Wrapper>
            <G.Frame>
              <p>ScheduleEvent</p>
              <S.Times>
                {this.context.state.slots.map((event, index) => {
                  return (
                    <SchedualCard
                      key={event.id}
                      id={event.id}
                      router={this.props}
                      start={new Date(event.start).toLocaleString('en-US', {
                        timeZone: 'America/Sao_Paulo'
                      })}
                      end={new Date(event.end).toLocaleString('en-US', {
                        timeZone: 'America/Sao_Paulo'
                      })}
                    />
                  );
                })}
              </S.Times>
            </G.Frame>
          </G.Wrapper>
        ) : (
          <Loader />
        )}
      </Fragment>
    );
  }
}

ScheduleEvent.contextType = AppContext;
export default ScheduleEvent;
