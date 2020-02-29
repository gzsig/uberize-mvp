import React, { Component } from 'react';
import * as S from './style';
// import { Link } from 'react-router-dom';

class EventCard extends Component {
  render() {
    return (
      <S.EventCard>
        <S.EventCardTitle>Titulo</S.EventCardTitle>
        <S.EventCardBody>
          <S.EventCardLine>
            <S.EventCardLabel> Descricão: </S.EventCardLabel>
            <S.EventCardInfo>lorem</S.EventCardInfo>
          </S.EventCardLine>
          <S.EventCardLine>
            <S.EventCardLabel>Duração: </S.EventCardLabel>
            <S.EventCardInfo>lorem</S.EventCardInfo>
          </S.EventCardLine>
          <S.EventCardLine>
            <S.EventCardLabel>Local: </S.EventCardLabel>
            <S.EventCardInfo>lorem</S.EventCardInfo>
          </S.EventCardLine>
        </S.EventCardBody>
        {/* <Link to='/'> Editar</Link> */}
      </S.EventCard>
    );
  }
}

export default EventCard;
