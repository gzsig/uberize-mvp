import React, { Component } from 'react';
import AppContext from '../../context/AppContext';
import * as S from './style';
import * as G from '../../resources/globalStyle';

class Profile extends Component {
  componentWillMount = async () => {
    await this.context.validateUser();
  };
  render() {
    return (
      <G.Wrapper>
        <G.Frame>Meus horarios</G.Frame>
      </G.Wrapper>
    );
  }
}

Profile.contextType = AppContext;
export default Profile;
