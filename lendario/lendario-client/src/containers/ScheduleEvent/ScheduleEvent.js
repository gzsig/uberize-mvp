import React, { Component } from 'react';
import server from '../../resources/axios';

class ScheduleEvent extends Component {
  // componentDidMount = () => {
  //   server()
  //     .get(`patient/appointment/${this.props.match.params.id}`)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // };
  render() {
    return (
      <div>
        <p>ScheduleEvent</p>
        <button
          onClick={() => {
            server()
              .get(`patient/appointment/${this.props.match.params.id}`)
              .then(res => console.log(res))
              .catch(err => console.log(err));
          }}
        >
          click me
        </button>
      </div>
    );
  }
}

export default ScheduleEvent;
