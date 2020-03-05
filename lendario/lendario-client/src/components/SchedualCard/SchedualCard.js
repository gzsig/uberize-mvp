import React, { Component } from 'react'
import * as S from './style'

class SchedualCard extends Component {
  render() {
    return (
      <S.TimeCard>
        <p> {this.props.start}</p>
        <p> {this.props.end}</p>
      </S.TimeCard>
    )
  }
}

export default SchedualCard;