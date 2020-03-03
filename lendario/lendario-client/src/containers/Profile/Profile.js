import React, { Component } from 'react';
import AppContext from '../../context/AppContext';
import * as G from '../../resources/globalStyle';
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import { Loader, ATag } from '../../components';
import Consumer from '../../context/AppConsumer';
import server from '../../resources/axios';

class Profile extends Component {
  componentDidMount = async () => {
    await this.context.validateUser();
    await this.context.getAppointments();
  };
  render() {
    return (
      <Consumer>
        {context => {
          if (
            context.state.loggedIn === 0 ||
            context.state.appointments.length === 0
          ) {
            return <Loader />;
          } else if (context.state.loggedIn === 2) {
            return (
              <G.Wrapper>
                <G.Frame>
                  <p>Meus horarios</p>
                  <ATag
                    path={`/le/${context.state.username}/evento`}
                    text='Novo Horario'
                  />
                  <G.Events>
                    {context.state.appointments[0] !== 'empty' &&
                      context.state.appointments.map(appointment => {
                        return (
                          <AppointmentCard
                            key={appointment._id}
                            id={appointment._id}
                            title={appointment.name}
                            description={appointment.description}
                            duration={appointment.duration}
                            location={appointment.location}
                            username={context.state.username}
                          />
                        );
                      })}
                  </G.Events>
                  {/* <button
                    onClick={() => {
                      console.log('here');

                      server(window.localStorage.crpt)
                        .post('/google/cal/event/create', {})
                        .then(res => console.log(res))
                        .catch(err => {
                          console.log(err);
                        });
                    }}
                  >
                    aqui
                  </button> */}
                </G.Frame>
              </G.Wrapper>
            );
          }
        }}
      </Consumer>
    );
  }
}

Profile.contextType = AppContext;
export default Profile;
