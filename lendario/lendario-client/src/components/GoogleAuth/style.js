import styled from 'styled-components';
import * as colors from '../../resources/colors';

const Footer = styled.span`
  position: absolute;
  top: 85%;
  width: 250px;
  color: ${colors.primary};
  text-align: center;
  a {
    color: ${colors.secondary};
    text-decoration: none;
    font-weight: bold;
  }
`;

const GoogleBtn = styled.a`
  height: fit-content;
  width: fit-content;
  cursor: pointer;
  background-color: ${colors.offWhite};
  padding: 4px 8px;
  border-radius: 4px;
  color: #2e2e2e;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05);
  font-weight: bold;
`;

const Welcome = styled.span`
  text-align: center;
  color: ${colors.secondary};
  font-size: 1.5rem;
`;

const SvgIcon = styled.span`
  vertical-align: middle;
  fill: rgba(0, 0, 0, 0.54);
  padding-right: 4px;
  height: 37px;
  display: inline-block;
`;

export { Footer, GoogleBtn, SvgIcon, Welcome };
