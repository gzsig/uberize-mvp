import React, { Component, Fragment } from 'react';
import AppContext from '../../context/AppContext';
import server from '../../resources/axios';
import * as G from '../../resources/globalStyle';
import * as S from './style'

class SchedualConfirm extends Component {
  state = {
    username: '',
    idappointment: '',
    pemail: '',
    pname: ''
  };
  componentDidMount = () => {
    const { username, idappointment, idtime } = this.props.router.match.params;
    this.context.state.slots.length === 0 &&
      window.location.assign(`/novo/${username}/${idappointment}`);
    const pickedDate = this.context.state.slots.filter(slot => {
      return slot.id === idtime;
    })[0];
    this.setState({
      pickedDate: pickedDate,
      username: username,
      idappointment: idappointment
    });
  };

  handelInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  createEvent = () => {
    server()
      .post('/google/cal/event/create', {
        appointmentId: this.state.idappointment,
        username: this.state.username,
        startTime: this.state.pickedDate.start,
        endTime: this.state.pickedDate.end,
        pemail: this.state.pemail,
        pname: this.state.pname
      })
      .then(res => console.log(res))
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    console.log(this.state.pickedDate);
    console.log(this.context.state.slots.length);

    return (
      <Fragment>

        <G.FormCard>
          {this.state.pickedDate && (
            <S.Header>
              Você escolheu a data{" "}
              <S.ConfirmDate>{new Date(this.state.pickedDate.start).toLocaleString('pt-BR', {
                timeZone: 'America/Sao_Paulo'
              }).split(" ")[0]}</S.ConfirmDate>
              {" "}das{" "}
              <span>{new Date(this.state.pickedDate.start).toLocaleString('pt-BR', {
                timeZone: 'America/Sao_Paulo'
              }).split(" ")[1]}</span>
              {" "}as{" "}
              <span>{new Date(this.state.pickedDate.end).toLocaleString('pt-BR', {
                timeZone: 'America/Sao_Paulo'
              }).split(" ")[1]}</span>
            </S.Header>
          )}
          <div>
            <G.Label>Nome</G.Label>
            <G.FiledM type='text' name='pname' autoComplete='off' onChange={this.handelInput} />
          </div>
          <div>
            <G.Label>Email</G.Label>
            <G.FiledM type='email' name='pemail' autoComplete='off' onChange={this.handelInput} />
          </div>
          <G.Button onClick={this.createEvent}>Confirmar</G.Button>
        </G.FormCard>

      </Fragment>
    );
  }
}
SchedualConfirm.contextType = AppContext;
export default SchedualConfirm;
