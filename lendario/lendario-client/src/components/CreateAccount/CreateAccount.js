import React, { Component } from 'react'
import * as S from './style'

export default class CreateAccount extends Component {
  render() {
    return (
      <div>
        <S.OnboardCard>
        <p>Olá, this.name</p>
        <S.Filed name='gz'/>
        </S.OnboardCard>
      </div>
    )
  }
}