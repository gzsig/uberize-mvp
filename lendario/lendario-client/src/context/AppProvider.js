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
    this.setState({loggedIn: 0})
    const { crpt } = window.localStorage;
    // console.log('validate user crpt:', crpt);
    
    return server(window.localStorage.crpt)
      .post('refresh', { crpt })
      .then(res => {
        // console.log('res', res);
        if (res.data.valid) {
          this.setState({
            loggedIn: 2,
            email: res.data.email,
            picture: res.data.picture,
            given_name: res.data.given_name,
            family_name: res.data.family_name
          });
        } else {
          window.localStorage.removeItem('crpt');
          this.setState({
            loggedIn: 1
          });
        }
        // console.log('validate user', this.state);
      })
      .catch(err => {
        // console.log('err', err.message);
        window.localStorage.removeItem('crpt');
        this.setState({
          loggedIn: 1
        });
      });
  };

  logout = () => {
    window.localStorage.removeItem('crpt');
    this.validateUser()
  };

  updateState = state => {
    this.setState(state);
    this.setState({
      loggedIn: 1
    });
  };

  render() {
    const context = {
      state: this.state,
      updateState: this.updateState,
      validateUser: this.validateUser,
      logout: this.logout
    };
    console.log(context.state);

    return (
      <AppContext.Provider value={context}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
