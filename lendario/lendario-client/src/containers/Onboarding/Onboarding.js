import React, { Component } from 'react';
import { CreateAccount, Loader } from '../../components';
import Consumer from '../../context/AppConsumer';
import AppContext from '../../context/AppContext';
import * as G from '../../resources/globalStyle';

class Onboarding extends Component {
  componentWillMount = async () => {
    await this.context.validateUser();
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
                <CreateAccount
                  name={context.state.given_name}
                  email={this.context.state.email}
                  router={this.props}
                />
              </G.Wrapper>
            );
          }
        }}
      </Consumer>
    );
  }
}
Onboarding.contextType = AppContext;
export default Onboarding;
