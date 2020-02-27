import React, { Component } from 'react';
import { CreateAccount } from '../../components';
import { Wrapper } from './style';
import Consumer from '../../context/AppConsumer';
import AppContext from '../../context/AppContext';

class Onboarding extends Component {
  componentDidMount = async () => {
    await this.context.validateUser();
    console.log('name:', this.context.state.given_name);
  };

  render() {
    return (
      <Wrapper>
        <Consumer>
          {context => {
            return (
              <CreateAccount
                name={context.state.given_name}
                email={this.context.state.email}
                router={this.props}
              />
            );
          }}
        </Consumer>
      </Wrapper>
    );
  }
}
Onboarding.contextType = AppContext;
export default Onboarding;
