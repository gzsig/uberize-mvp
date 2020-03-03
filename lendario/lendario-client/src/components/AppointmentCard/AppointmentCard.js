import React, { Component } from 'react';
import * as S from './style';
import ATag from '../ATag';
// import { Link } from 'react-router-dom';

class AppointmentCard extends Component {
  render() {
    return (
      <S.AppointmentCard>
        <S.AppointmentCardTitle>{this.props.title}</S.AppointmentCardTitle>
        <S.AppointmentCardBody>
          <S.AppointmentCardLine>
            <S.AppointmentCardLabel> Descricão: </S.AppointmentCardLabel>
            <S.AppointmentCardInfo>{this.props.description}</S.AppointmentCardInfo>
          </S.AppointmentCardLine>
          <S.AppointmentCardLine>
            <S.AppointmentCardLabel>Duração: </S.AppointmentCardLabel>
            <S.AppointmentCardInfo>{this.props.duration}</S.AppointmentCardInfo>
          </S.AppointmentCardLine>
          <S.AppointmentCardLine>
            <S.AppointmentCardLabel>Local: </S.AppointmentCardLabel>
            <S.AppointmentCardInfo>{this.props.location}</S.AppointmentCardInfo>
          </S.AppointmentCardLine>
        </S.AppointmentCardBody>
        <S.AppointmentCardFooter>
          <ATag
            path={`/le/${this.props.username}/evento/${this.props.id}`}
            text='Editar'
          />
        </S.AppointmentCardFooter>
      </S.AppointmentCard>
    );
  }
}

export default AppointmentCard;
