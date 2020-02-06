import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #E91E63;
  `;
  
  const Item = styled.ul`
  color: #E91E63;
`;

const Items = styled.ul`
  display: flex;
  justify-content: evenly;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #2d2d2d;
  padding: 0 20%;
  box-shadow: 0 0 8px rgba(0, 0, 0, .5);
`;

export { Item, Items, Title, Nav }