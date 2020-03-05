import React, { Component } from 'react';
import server from '../../resources/axios';
import * as G from '../../resources/globalStyle';
import * as S from './style';
import { SchedualCard } from '../../components';

class ScheduleEvent extends Component {
  state = {
    slots: []
  };
  componentDidMount = () => {
    server()
      .post(`patient/appointment/${this.props.match.params.id}`)
      .then(res => {
        console.log(res);
        this.setState({ slots: res.data.slots });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <G.Wrapper>
        <G.Frame>
          <p>ScheduleEvent</p>
          <S.Times>
            {this.state.slots.map((event, index) => {
              return (
                <SchedualCard
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
          {/* <button
          onClick={() => {
            server()
              .post(`patient/appointment/${this.props.match.params.id}`)
              .then(res => console.log(res))
              .catch(err => console.log(err));
          }}
        >
          click me
        </button> */}
        </G.Frame>
      </G.Wrapper>
    );
  }
}

export default ScheduleEvent;
