import React, { Component } from 'react';
import { Title, Nav, Item, Items } from './style';

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <Title>Lendário</Title>
        <Items>
          <Item>teste</Item>
          <Item>teste2</Item>
          <Item>teste3</Item>
          <Item>teste4</Item>
        </Items>
      </Nav>
    )
  }
}

export default Navbar