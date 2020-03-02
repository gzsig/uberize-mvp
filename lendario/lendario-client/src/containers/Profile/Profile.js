import React, { Component } from 'react';
import AppContext from '../../context/AppContext';
import * as S from './style';
import * as G from '../../resources/globalStyle';
import EventCard from '../../components/EventCard/EventCard';
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
                  <S.Events>
                    {context.state.appointments.map(appointment => {
                      return (
                        <EventCard
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
                  </S.Events>
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
