import React, { Component } from 'react';
import * as S from './style';
import * as G from '../../resources/globalStyle';
// import server from '../../resources/axios';
import AppContext from '../../context/AppContext';

class EventForm extends Component {
  render() {
    return (
      <S.FormCard>
        <div>
          <G.Label>Nome</G.Label>
          <G.FiledM
            type='text'
            name='name'
            autoComplete='off'
            onChange={this.props.handelInput}
            value={this.props.name}
          />
        </div>
        <div>
          <G.Label>Descrição</G.Label>
          <G.FiledL
            type='text'
            name='description'
            autoComplete='off'
            onChange={this.props.handelInput}
            value={this.props.description}
          />
        </div>
        <div>
          <G.Label>Duração </G.Label>
          <G.FiledS
            type='number'
            name='duration'
            autoComplete='off'
            onChange={this.props.handelInput}
            value={this.props.duration}
          />
        </div>
        <div>
          <G.Label>Local</G.Label>
          <G.FiledM
            type='text'
            name='location'
            autoComplete='off'
            onChange={this.props.handelInput}
            value={this.props.location}
          />
        </div>
        <G.Button onClick={this.props.handleSave}>Salvar</G.Button>
        {this.props.handleDelete && (
          <button onClick={this.props.handleDelete}>del</button>
        )}
      </S.FormCard>
    );
  }
}

EventForm.contextType = AppContext;
export default EventForm;
