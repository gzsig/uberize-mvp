import styled from 'styled-components';
import * as colors from '../../resources/colors'

const Footer = styled.span`
  position: absolute;
  top: 85%;
  width: 250px;
  color: ${colors.primary};
  a {
    color: ${colors.secondary};
    text-decoration: none;
    font-weight: bold;
  }
`

const LoginCard = styled.div `
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 250px;
padding: 0 25px;
border: 0;
height: 300px;
border-radius: 4px;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
-moz-font-feature-settings: "liga" on;
background-color: ${colors.beige};
box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05);
font: inherit;
outline: none;
position: relative;
`

const GoogleBtn = styled.a`
height: fit-content;
width: fit-content;
cursor: pointer;
background-color: ${colors.offWhite};
padding: 4px 8px;
border-radius: 4px;
color: #2E2E2E;
box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05);
font-weight: bold;
`

const Welcome = styled.span`
text-align:center;
color: ${colors.secondary};
font-size: 1.5rem;
`

const SvgIcon = styled.span`
vertical-align: middle;
fill: rgba(0, 0, 0, 0.54);
padding-right: 4px;
height: 37px;
display: inline-block;
`

export {Footer, GoogleBtn, LoginCard, SvgIcon, Welcome}