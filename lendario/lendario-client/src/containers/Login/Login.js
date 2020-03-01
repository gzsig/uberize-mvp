import React, { Component } from 'react';
import { GoogleAuth, Loader } from '../../components';
import Consumer from '../../context/AppConsumer';
import AppContext from '../../context/AppContext';
import queryString from 'query-string';
import * as G from '../../resources/globalStyle';

class Login extends Component {
  componentDidMount = async () => {
    const query = queryString.parse(this.props.location.search);
    if (query.token) {
      window.localStorage.setItem('crpt', query.token);
      this.props.history.push('/');
    }

    if (this.context.state.loggedIn === 2) {
      this.props.history.push(`/le/${this.context.state.username}`);
    } else {
      await this.context.validateUser();
      this.props.history.push(`/le/${this.context.state.username}`);
    }
  };

  render() {
    return (
      <Consumer>
        {context => {
          if (context.state.loggedIn === 1) {
            return (
              <G.Wrapper>
                <GoogleAuth router={this.props} />
              </G.Wrapper>
            );
          } else if (context.state.loggedIn === 0) {
            return <Loader />;
          }
        }}
      </Consumer>
    );
  }
}

Login.contextType = AppContext;
export default Login;
