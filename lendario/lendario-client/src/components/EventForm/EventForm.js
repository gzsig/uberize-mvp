import React, { Component, Fragment } from 'react';
import * as S from './style';
import * as G from '../../resources/globalStyle';

class EventForm extends Component {
  state = {
    name: '',
    description: '',
    duration: '',
    location: ''
  };

  handelInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  teste = (e) =>{console.log(this.state)}
  render() {
    return (
      <S.FormCard>
        <div>
          <G.Label>Nome</G.Label>
          <G.FiledM
            type='text'
            name='name'
            autoComplete='off'
            onChange={this.handelInput}
          />
        </div>
        <div>
          <G.Label>Descrição</G.Label>
          <G.FiledL
            type='text'
            name='description'
            autoComplete='off'
            onChange={this.handelInput}
          />
        </div>
        <div>
          <G.Label>Duração </G.Label>
          <G.FiledS
            type='number'
            name='duration'
            autoComplete='off'
            onChange={this.handelInput}
          />
        </div>
        <div>
          <G.Label>Local</G.Label>
          <G.FiledM
            type='text'
            name='location'
            autoComplete='off'
            onChange={this.handelInput}
          />
        </div>
        <G.Button onClick={this.teste}>Salvar</G.Button>
      </S.FormCard>
    );
  }
}

export default EventForm;
