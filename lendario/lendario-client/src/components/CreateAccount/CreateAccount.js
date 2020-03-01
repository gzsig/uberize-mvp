import React, { Component } from 'react';
import * as S from './style';
import * as G from '../../resources/globalStyle';
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
          this.props.router.history.push(`/le/${this.state.username}`);
        } else {
          alert(res.data.statusText);
        }
      });
  };

  render() {
    return (
      <div>
        <G.BeigeCard>
          <div>
            <p>
              Olá,
              <S.Name> {this.props.name} </S.Name>
            </p>
            <span>Precisamos criar um apelido</span>
          </div>
          <div>
            <G.Label>apelido</G.Label>
            <G.FiledS
              type='text'
              name='username'
              autoComplete='off'
              onChange={event => {
                this.setState({ username: event.target.value });
              }}
            />
          </div>
          <G.Button onClick={this.createUsername}>Salvar</G.Button>
        </G.BeigeCard>
      </div>
    );
  }
}

export default CreateAccount;
