import React, { Component } from "react";
import AppContext from "../../context/AppContext";
import * as G from "../../resources/globalStyle";
import * as S from "./style";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";
import { Loader } from "../../components";
import Consumer from "../../context/AppConsumer";
import { Container, Header, Icon, Card, Button } from "semantic-ui-react";
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
              <Container>
                <Header as="h2">
                  <Icon name="calendar alternate outline" />
                  <Header.Content>Meus Horarios</Header.Content>
                </Header>
                <Card.Group>
                  {context.state.appointments[0] !== "empty" &&
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
                </Card.Group>
                <S.BtnWrapper>
                  <Button onClick={this.handleClick} basic color='green' content='Novo Horário' />
                </S.BtnWrapper>
              </Container>
            );
          }
        }}
      </Consumer>
    );
  }
}

Profile.contextType = AppContext;
export default Profile;
