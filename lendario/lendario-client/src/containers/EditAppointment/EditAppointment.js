import React, { Component } from "react";
import Consumer from "../../context/AppConsumer";
import AppContext from "../../context/AppContext";
import { Loader, AppointmentForm } from "../../components";
import server from "../../resources/axios";
import { Container, Header, Icon } from "semantic-ui-react";

class EditAppointment extends Component {
  state = {
    _id: "",
    name: "",
    description: "",
    duration: "",
    location: ""
  };

  componentDidMount = async () => {
    await this.context.validateUser();
    await this.context.getAppointments();
    this.getAppointment();
  };

  getAppointment = () => {
    const newState = this.context.state.appointments.filter(
      appointment => appointment._id === this.props.match.params.id
    )[0];
    this.setState({ ...newState });
  };

  handelInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSave = e => {
    const calAppointment = this.state;
    console.log(calAppointment);
    server(window.localStorage.crpt)
      .patch("/my/appointment/edit", {
        calAppointment,
        id: this.state._id
      })
      .then(res => {
        if (res.status === 200) {
          this.props.history.push(`/le/${this.context.state.username}`);
        } else {
          alert(res.data.statusText);
        }
      })
      .catch(err => alert(err));
  };

  handleDelete = e => {
    server(window.localStorage.crpt)
      .delete(`/my/appointment/delete/${this.state._id}`)
      .then(res => {
        if (res.status === 200) {
          this.props.history.push(`/le/${this.context.state.username}`);
        } else {
          alert(res.data.statusText);
        }
      })
      .catch(err => alert(err));
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
                  <Header.Content>Editar Horario</Header.Content>
                </Header>
                <AppointmentForm
                  name={this.state.name}
                  description={this.state.description}
                  duration={this.state.duration}
                  location={this.state.location}
                  handelInput={this.handelInput}
                  handleSave={this.handleSave}
                  handleDelete={this.handleDelete}
                />
              </Container>
            );
          }
        }}
      </Consumer>
    );
  }
}

EditAppointment.contextType = AppContext;
export default EditAppointment;
