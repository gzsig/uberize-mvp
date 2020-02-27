import React, { Component } from 'react';
import * as S from './style';
import server from '../../resources/axios';

class CreateAccount extends Component {
  state = {
    username: ''
  };
  createUsername = event => {
    event.preventDefault();
    console.log(this.state.username);
    server(window.localStorage.crpt)
      .post('onboarding', {
        email: this.props.email,
        username: this.state.username
      })
      .then(res => {
        console.log(res.status);
        if (res.status === 200) {
          alert(res.message);
          this.props.router.history.push('/');
        } else {
          alert(res.message);
        }
      });
  };

  render() {
    return (
      <div>
        <S.OnboardCard>
          <div>
            <p>
              Olá,
              <S.Name> {this.props.name} </S.Name>
            </p>
            <span>Precisamos criar um apelido</span>
          </div>
          <div>
            <S.Label>apelido</S.Label>
            <S.Filed
              type='text'
              name='username'
              autoComplete='off'
              onChange={event => {
                this.setState({ username: event.target.value });
              }}
            />
          </div>
          <S.Button onClick={this.createUsername}>Salvar</S.Button>
        </S.OnboardCard>
      </div>
    );
  }
}

export default CreateAccount;
