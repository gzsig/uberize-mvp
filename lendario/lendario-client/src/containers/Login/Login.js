import React, { Component } from 'react';
import { GoogleAuth } from '../../components';
import { Wrapper } from './style';
import Consumer from '../../context/AppConsumer';

class Login extends Component {
  render() {
    return (
      <Wrapper>
        <Consumer>
          {context => {
            if (!context.state.loggedIn) {
              return <GoogleAuth router={this.props} />;
            }
          }}
        </Consumer>
      </Wrapper>
    );
  }
}

export default Login;
