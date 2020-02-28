import React, { Component } from 'react';
import { GoogleAuth, Loader } from '../../components';
import { Wrapper } from './style';
import Consumer from '../../context/AppConsumer';
import AppContext from '../../context/AppContext';
import queryString from 'query-string';

class Login extends Component {

  componentDidMount = async () => {
    const query = queryString.parse(this.props.location.search);
    if (query.token) {
      window.localStorage.setItem('crpt', query.token);
      this.props.history.push('/');
    }
    await this.context.validateUser();
    this.context.state.loggedIn === 2 && this.props.history.push(`/${this.context.state.username}`);
  }

  render() {
    return (
      <Wrapper>
        <Consumer>
          {context => {
            if (context.state.loggedIn === 1) {
              return <GoogleAuth router={this.props} />;
            } else if (context.state.loggedIn === 0) {
              return <Loader />;
            }
          }}
        </Consumer>
      </Wrapper>
    );
  }
}

Login.contextType = AppContext;
export default Login;
