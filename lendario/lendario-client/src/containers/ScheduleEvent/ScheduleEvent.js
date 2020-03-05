import React, { Component } from 'react';
import server from '../../resources/axios';

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
      <div>
        <p>ScheduleEvent</p>
        {this.state.slots.map((event, index) => {
          return (
            <div>
              {new Date(event.start).toLocaleString('en-US', {
                timeZone: 'America/Sao_Paulo'
              })}
              {new Date(event.end).toLocaleString('en-US', {
                timeZone: 'America/Sao_Paulo'
              })}
            </div>
          );
        })}
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
      </div>
    );
  }
}

export default ScheduleEvent;
