import React, { Component, Fragment } from "react";
import * as S from "./style";
import ATag from "../ATag";
import { Card, Icon } from "semantic-ui-react";
// import { Link } from 'react-router-dom';

class AppointmentCard extends Component {
  render() {
    return (
      <Card>
        <Card.Content
          header={this.props.title}
          meta={`${this.props.duration} min`}
          description={this.props.description}
          // location={this.props.location} PRECISA COLOCAR
        />
        <Card.Content extra>
          {this.props.patient ? (
            <Fragment>
              <Icon name="share square outline" />
              <ATag
                path={`/novo/${this.props.username}/${this.props.id}`}
                text="Agendar"
              />
            </Fragment>
          ) : (
            <Fragment>
              <Icon name="edit outline" />
              <ATag
                path={`/le/${this.props.username}/evento/${this.props.id}`}
                text="Editar"
              />
            </Fragment>
          )}
        </Card.Content>
      </Card>
    );
  }
}

export default AppointmentCard;
