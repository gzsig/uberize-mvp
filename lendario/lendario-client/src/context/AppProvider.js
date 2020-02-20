import React, { Component } from 'react';
import AppContext from './AppContext';
import server from '../resources/axios';

class AppProvider extends Component {
  state = {
    loggedIn: false,
    email: '',
    picture: '',
    given_name: '',
    family_name: '',
  };

  validateUser = () => {
    const { crpt } = window.location;
    server
      .post('refresh', { crpt })
      .then(res => {
        console.log('res', res);
        if (res.data.valid) {
          this.setState({
            loggedIn: true,
            email: res.data.email,
            picture: res.data.picture,
            given_name: res.data.given_name,
            family_name: res.data.family_name
          });
        }
      })
      .catch(err => console.log('err', err.message));
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
