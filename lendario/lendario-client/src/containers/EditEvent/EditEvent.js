import React, { Component } from 'react';
import Consumer from '../../context/AppConsumer';
import * as G from '../../resources/globalStyle';
import AppContext from '../../context/AppContext';
import { Loader, EventForm } from '../../components';

class EditEvent extends Component {
  state = {
    name: '',
    description: '',
    duration: '',
    location: ''
  };

  componentDidMount = async () => {
    await this.context.validateUser();
    await this.context.getAppointments();
    this.getAppointment();
  };

  getAppointment = () => {
    // console.log(this.context.state.appointments);
    const newState = this.context.state.appointments.filter(
      appointment => appointment._id === this.props.match.params.id
    )[0];
    this.setState({ ...newState });
  };

  render() {
    return (
      <Consumer>
        {context => {
          if (context.state.loggedIn === 0) {
            return <Loader />;
          } else if (context.state.loggedIn === 2) {
            console.log(this.state);
            return (
              <G.Wrapper>
                {/* <G.Frame> */}

                <EventForm
                  router={this.props}
                  name={this.state.name}
                  description={this.state.description}
                  duration={this.state.duration}
                  location={this.state.location}
                />
                {/* </G.Frame> */}
              </G.Wrapper>
            );
          }
        }}
      </Consumer>
    );
  }
}

EditEvent.contextType = AppContext;
export default EditEvent;
