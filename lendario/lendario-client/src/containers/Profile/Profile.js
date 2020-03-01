import React, { Component } from 'react';
import AppContext from '../../context/AppContext';
import * as S from './style';
import * as G from '../../resources/globalStyle';
import EventCard from '../../components/EventCard/EventCard';
import { Loader, ATag } from '../../components';
import Consumer from '../../context/AppConsumer';

class Profile extends Component {
  componentDidMount = async () => {
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
                <G.Frame>
                  <p>Meus horarios</p>
                  <ATag
                    path={`/le/${context.state.username}/evento`}
                    text='Novo Horario'
                  />
                  <S.Events>
                    <EventCard />
                    <EventCard />
                  </S.Events>
                </G.Frame>
              </G.Wrapper>
            );
          }
        }}
      </Consumer>
    );
  }
}

Profile.contextType = AppContext;
export default Profile;
