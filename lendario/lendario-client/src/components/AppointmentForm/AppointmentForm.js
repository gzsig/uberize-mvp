import React, { Component } from 'react';
import * as S from './style';
import * as G from '../../resources/globalStyle';
import AppContext from '../../context/AppContext';

class AppointmentForm extends Component {
  render() {
    return (
      <G.FormCard>
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
        <S.saveOrCancel>
        <G.Button onClick={this.props.handleSave}>Salvar</G.Button>
        {this.props.handleDelete && (
          <a onClick={this.props.handleDelete}>Apagar</a>
        )}
        {this.props.handleCancel && (
          <a onClick={this.props.handleCancel}>Cancelar</a>
        )}
        </S.saveOrCancel>
      </G.FormCard>
    );
  }
}

AppointmentForm.contextType = AppContext;
export default AppointmentForm;
