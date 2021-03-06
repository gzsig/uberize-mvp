import React, { Component } from "react";
import Consumer from "../../context/AppConsumer";
import * as G from "../../resources/globalStyle";
import AppContext from "../../context/AppContext";
import { Loader, AppointmentForm } from "../../components";
import server from "../../resources/axios";
import { Container, Header, Icon } from "semantic-ui-react";

class NewAppointment extends Component {
  state = {
    name: "",
    description: "",
    duration: "",
    location: ""
  };

  componentDidMount = async () => {
    await this.context.validateUser();
  };

  handelInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSave = e => {
    const { name, description, duration, location } = this.state;
    if (
      name == "" ||
      description == "" ||
      duration == "" ||
      duration == 0 ||
      location == ""
    ) {
      alert("Todos os campos precisam ser preenchidos");
    } else {
      const calAppointment = this.state;
      console.log(calAppointment);
      server(window.localStorage.crpt)
        .post("/my/appointment/new", { calAppointment })
        .then(res => {
          if (res.status === 200) {
            this.props.history.push(`/le/${this.context.state.username}`);
          } else {
            alert(res.data.statusText);
          }
        })
        .catch(err => alert(err));
    }
  };

  render() {
    return (
      <Consumer>
        {context => {
          if (context.state.loggedIn === 0) {
            return <Loader />;
          } else if (context.state.loggedIn === 2) {
            return (
              <Container>
                <Header as="h2">
                  <Icon name="calendar alternate outline" />
                  <Header.Content>Novo Horario</Header.Content>
                </Header>
                <AppointmentForm
                  handelInput={this.handelInput}
                  handleSave={this.handleSave}
                  handleCancel={() => {
                    this.props.history.push("/");
                  }}
                />
              </Container>
            );
          }
        }}
      </Consumer>
    );
  }
}

NewAppointment.contextType = AppContext;
export default NewAppointment;
