import React, { Component } from 'react';
import * as S from './style';
import AppContext from '../../context/AppContext';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <S.Nav>
        <Link to='/'> <S.Title >Lendário</S.Title></Link>
        <S.Items>
          {this.context.state.given_name && <Link to={{pathname: `/le/${this.context.state.username}`}}> <S.Item>{this.context.state.given_name}</S.Item> </Link>}
          {this.context.state.given_name && <Link to='/le/calendario'> <S.Item>Calendario</S.Item></Link> }
          {this.context.state.given_name && <S.Item onClick={this.context.logout}>Sair</S.Item> }
          {this.context.state.given_name && <S.Item> <S.ThumbNail src={this.context.state.picture} /></S.Item> }
          
        </S.Items>
      </S.Nav>
    )
  }
}

Navbar.contextType = AppContext
export default Navbar