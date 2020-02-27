import React, { Component } from 'react';
import * as S from './style';
import AppContext from '../../context/AppContext';

class Navbar extends Component {
  render() {
    return (
      <S.Nav>
        <S.Title onClick={()=>{window.location.assign('/')}}>Lendário</S.Title>
        <S.Items>
          <S.Item>Contato</S.Item>
          {this.context.state.given_name && <S.Item>{this.context.state.given_name}</S.Item> }
          {this.context.state.given_name && <S.Item onClick={this.context.logout}>Logout</S.Item> }
          {this.context.state.given_name && <S.Item> <S.ThumbNail src={this.context.state.picture} /></S.Item> }
          
        </S.Items>
      </S.Nav>
    )
  }
}

Navbar.contextType = AppContext
export default Navbar