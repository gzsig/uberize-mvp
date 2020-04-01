import React, { Component } from 'react';
import AppContext from '../../context/AppContext';
import * as G from '../../resources/globalStyle';
import * as S from './style';
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import { Loader, ATag } from '../../components';
import Consumer from '../../context/AppConsumer';

class Profile extends Component {
  componentDidMount = async () => {
    await this.context.validateUser();
    await this.context.getAppointments();
  };

  handleClick = () => {
    this.props.history.push(`/le/${this.context.state.username}/evento`);
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
                  <G.PgTitle>Meus Horarios</G.PgTitle>
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
                  <S.BtnWrapper>
                    <G.Button onClick={this.handleClick}>Novo Horário</G.Button>
                  </S.BtnWrapper>
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
