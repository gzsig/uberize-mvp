import React, { Component } from 'react';
import Consumer from '../../context/AppConsumer';
import * as G from '../../resources/globalStyle';
import AppContext from '../../context/AppContext';
import { Loader, EventForm } from '../../components';
import server from '../../resources/axios';

class NewEvent extends Component {
  state = {
    name: '',
    description: '',
    duration: '',
    location: ''
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
    const calAppointment = this.state;
    console.log(calAppointment);
    server(window.localStorage.crpt)
      .post('/google/cal/appointment/new', { calAppointment })
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
              <G.Wrapper>
                {/* <G.Frame> */}
                <EventForm
                  handelInput={this.handelInput}
                  handleSave={this.handleSave}
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

NewEvent.contextType = AppContext;
export default NewEvent;
