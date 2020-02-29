import React, { Component } from 'react';
import AppContext from './AppContext';
import server from '../resources/axios';

class AppProvider extends Component {
  state = {
    loggedIn: 0,
    email: '',
    picture: '',
    given_name: '',
    family_name: '',
    force_reload: null
  };

  validateUser = () => {
    this.setState({ loggedIn: 0 });
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
            family_name: res.data.family_name,
            username: res.data.username,
            force_reload: res.data.force_reload
          });
          this.state.force_reload &&
            this.forceReload(this.state.force_reload, this);
        } else {
          window.localStorage.removeItem('crpt');
          this.setState({
            loggedIn: 1,
            email: '',
            picture: '',
            given_name: '',
            family_name: '',
            force_reload: null
          });
          window.location.pathname !== '/' && window.location.assign('/');
        }
        // console.log('validate user', this.state);
      })
      .catch(err => {
        // console.log('err', err.message);
        window.localStorage.removeItem('crpt');
        this.setState({
          loggedIn: 1,
          email: '',
          picture: '',
          given_name: '',
          family_name: '',
          force_reload: null
        });
        window.location.pathname !== '/' && window.location.assign('/');
      });
  };

  logout = () => {
    window.localStorage.removeItem('crpt');
    this.validateUser();
  };

  forceReload = (time, vu) => {
    let timeleft = parseInt(time);
    console.log((timeleft + 285) * -1000);
    setTimeout(function() {
      vu.validateUser();
    }, (timeleft + 285) * -1000);
  };

  updateState = state => {
    this.setState(state);
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
