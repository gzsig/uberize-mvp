import React, { Component } from 'react'
import * as S from './style'

export default class CreateAccount extends Component {
  render() {
    return (
      <div>
        <S.OnboardCard>
          <div>
            <p>
              Olá,
            <S.Name> Gabriel</S.Name>
            </p>
            <span>Precisamos de algumas informações</span>
          </div>
          <div>
            <S.Label>Nome</S.Label>
            <S.Filed type="text" name="business" autoComplete="off" />
          </div>
          <div>
            <S.Label>Username</S.Label>
            <S.Filed type="text" name="username" autoComplete="off" />
          </div>
          <S.Button>Salvar</S.Button>
        </S.OnboardCard>
      </div>
    )
  }
}