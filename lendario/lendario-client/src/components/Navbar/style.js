import styled from 'styled-components'
import * as colors from '../../resources/colors'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${colors.secondary};
  `;
  
  const Item = styled.ul`
  color: ${colors.secondary};
`;

const Items = styled.ul`
  display: flex;
  justify-content: evenly;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.primary};
  padding: 0 20%;
  box-shadow: 0 0 8px rgba(0, 0, 0, .5);
  height: 68px;
`;

export { Item, Items, Title, Nav }