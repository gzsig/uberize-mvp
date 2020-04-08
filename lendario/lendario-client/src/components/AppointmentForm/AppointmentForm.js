import React, { Component, Fragment } from "react";
import * as S from "./style";
import * as G from "../../resources/globalStyle";
import AppContext from "../../context/AppContext";
import { Button, Checkbox, Form } from "semantic-ui-react";

class AppointmentForm extends Component {
  render() {
    return (
      <Fragment>
        <Form>
          <Form.Group>
            <Form.Field width="6">
              <label>Nome</label>
              <input
                placeholder="Aula de Matematica"
                type="text"
                name="name"
                autoComplete="off"
                onChange={this.props.handelInput}
                value={this.props.name}
              />
            </Form.Field>
            <Form.Field width="2">
              <label>Duração</label>
              <input
                placeholder="60"
                type="number"
                name="duration"
                autoComplete="off"
                onChange={this.props.handelInput}
                value={this.props.duration}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field width="8">
            <label>Descrição</label>
            <Form.TextArea
              placeholder="Aula para Preparar para vestibular"
              type="text"
              name="description"
              autoComplete="off"
              onChange={this.props.handelInput}
              value={this.props.description}
            />
          </Form.Field>
          <Form.Field width="8">
            <label>Local</label>
            <input
              placeholder="R. Moras 500"
              type="text"
              name="location"
              autoComplete="off"
              onChange={this.props.handelInput}
              value={this.props.location}
            />
          </Form.Field>

          <Button
            basic
            color="green"
            onClick={this.props.handleSave}
            content="Salvar"
          />
          {this.props.handleDelete && (
            <Button
              basic
              color="purple"
              onClick={this.props.handleDelete}
              content="Apagar"
            />
          )}
          {this.props.handleCancel && (
            <Button
              basic
              color="purple"
              onClick={this.props.handleCancel}
              content="Cancelar"
            />
          )}
        </Form>
      </Fragment>
    );
  }
}

AppointmentForm.contextType = AppContext;
export default AppointmentForm;
