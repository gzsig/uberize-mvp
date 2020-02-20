import React, { Component } from 'react';
import AppContext from './AppContext';
import server from '../resources/axios';

class AppProvider extends Component {
  state = {
    loggedIn: 0,
    email: '',
    picture: '',
    given_name: '',
    family_name: ''
  };

  validateUser = () => {
    const { crpt } = window.location;
    server
      .post('refresh', { crpt })
      .then(res => {
        console.log('res', res);
        if (res.data.valid) {
          this.setState({
            loggedIn: 2,
            email: res.data.email,
            picture: res.data.picture,
            given_name: res.data.given_name,
            family_name: res.data.family_name
          });
        } else {
          this.setState({
            loggedIn: 1
          });
        }
      })
      .catch(err => {
        console.log('err', err.message);
        this.setState({
          loggedIn: 1
        });
      });
  };

  updateState = state => {
    this.setState(state);
  };

  render() {
    const context = {
      state: this.state,
      updateState: this.updateState,
      validateUser: this.validateUser
    };
    return (
      <AppContext.Provider value={context}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
