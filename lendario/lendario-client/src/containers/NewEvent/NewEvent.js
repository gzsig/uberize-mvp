import React, { Component } from 'react';
import Consumer from '../../context/AppConsumer';
import * as G from '../../resources/globalStyle';
import AppContext from '../../context/AppContext';
import { Loader, EventForm } from '../../components';

class NewEvent extends Component {
  componentDidMount = () => {
    this.context.validateUser();
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
                  <EventForm />
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
