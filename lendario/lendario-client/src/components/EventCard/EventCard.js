import React, { Component } from 'react';
import * as S from './style';
import ATag from '../ATag';
// import { Link } from 'react-router-dom';

class EventCard extends Component {
  render() {
    return (
      <S.EventCard>
        <S.EventCardTitle>{this.props.title}</S.EventCardTitle>
        <S.EventCardBody>
          <S.EventCardLine>
            <S.EventCardLabel> Descricão: </S.EventCardLabel>
            <S.EventCardInfo>{this.props.description}</S.EventCardInfo>
          </S.EventCardLine>
          <S.EventCardLine>
            <S.EventCardLabel>Duração: </S.EventCardLabel>
            <S.EventCardInfo>{this.props.duration}</S.EventCardInfo>
          </S.EventCardLine>
          <S.EventCardLine>
            <S.EventCardLabel>Local: </S.EventCardLabel>
            <S.EventCardInfo>{this.props.location}</S.EventCardInfo>
          </S.EventCardLine>
        </S.EventCardBody>
        <S.EventCardFooter>
          <ATag
            path={`/le/${this.props.username}/${this.props.id}`}
            text='Editar'
          />
        </S.EventCardFooter>
      </S.EventCard>
    );
  }
}

export default EventCard;
