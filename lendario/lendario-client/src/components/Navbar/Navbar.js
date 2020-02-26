import React, { Component } from 'react';
import { Title, Nav, Item, Items } from './style';
import AppContext from '../../context/AppContext';

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <Title>Lendário</Title>
        <Items>
          <Item>Contato</Item>
          {this.context.state.given_name && <Item>{this.context.state.given_name}</Item> }
          {this.context.state.given_name && <Item onClick={this.context.logout}>Logout</Item> }
          
        </Items>
      </Nav>
    )
  }
}

Navbar.contextType = AppContext
export default Navbar