import React, { Component } from 'react';
import AppContext from '../../context/AppContext';

class Profile extends Component {
  componentWillMount = async () => {
    await this.context.validateUser();
  };
  render() {
    return <div></div>;
  }
}

Profile.contextType = AppContext;
export default Profile;
