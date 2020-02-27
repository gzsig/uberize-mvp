import React, { Component } from 'react';
import { CreateAccount, Loader } from '../../components';
import { Wrapper } from './style';
import Consumer from '../../context/AppConsumer';
import AppContext from '../../context/AppContext';

class Onboarding extends Component {
  componentWillMount = async () => {
    await this.context.validateUser();
  };

  render() {
    return (
      <Wrapper>
        <Consumer>
          {context => {
            if (context.state.loggedIn === 0) {
              return <Loader />;
            } else if (context.state.loggedIn === 2) {
              return (
                <CreateAccount
                  name={context.state.given_name}
                  email={this.context.state.email}
                  router={this.props}
                />
              );
            }
          }}
        </Consumer>
      </Wrapper>
    );
  }
}
Onboarding.contextType = AppContext;
export default Onboarding;
