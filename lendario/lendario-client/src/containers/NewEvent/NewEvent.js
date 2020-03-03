import React, { Component, Fragment } from 'react';
import * as G from '../../resources/globalStyle';
import server from '../../resources/axios';
import { AppointmentCard, Loader } from '../../components';

class NewEvent extends Component {
  componentDidMount = () => {
    server()
      .get(`patient/appointments/${this.props.match.params.username}`)
      .then(res => {
        this.setState({
          appointments: res.data.appointments
        });
        console.log(res.data);
      });
  };

  state = {
    appointments: []
  };
  render() {
    return (
      <Fragment>
        {this.state.appointments.length === 0 ? (
          <Loader />
        ) : (
          <G.Wrapper>
            <G.Frame>
              <p>evento</p>
              <G.Events>
                {this.state.appointments.map(appointment => {
                  return (
                    <AppointmentCard
                      key={appointment._id}
                      id={appointment._id}
                      title={appointment.name}
                      description={appointment.description}
                      duration={appointment.duration}
                      location={appointment.location}
                      username={this.props.match.params.username}
                      patient={true}
                    />
                  );
                })}
              </G.Events>
            </G.Frame>
          </G.Wrapper>
        )}
      </Fragment>
    );
  }
}
export default NewEvent;
