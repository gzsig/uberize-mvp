import React, { Component, Fragment } from 'react';
import * as S from './style';
import * as G from '../../resources/globalStyle';
import server from '../../resources/axios';
import AppContext from '../../context/AppContext';

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
  handleSave = e => {
    const calAppointment = this.state;
    console.log(calAppointment);
    server(window.localStorage.crpt)
      .post('/google/cal/appointment/new', { calAppointment })
      .then(res => {
        if (res.status === 200) {
          this.props.router.history.push(`/le/${this.context.state.username}`);
        } else {
          alert(res.data.statusText);
        }
      });
  };
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
        <G.Button onClick={this.handleSave}>Salvar</G.Button>
      </S.FormCard>
    );
  }
}

EventForm.contextType = AppContext;
export default EventForm;
