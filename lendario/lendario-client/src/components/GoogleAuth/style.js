import styled from 'styled-components';

const Footer = styled.span`
  position: absolute;
  top: 85%;
  width: 250px;
  a {
    text-decoration: none;
    color: #DD4B39;
    font-weight: bold;
  }
`

const LoginCard = styled.div `
-webkit-tap-highlight-color: transparent;
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
color: rgba(0, 0, 0, 0.84) !important;
fill: rgba(0, 0, 0, 0.84) !important;
box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05);
font: inherit;
outline: none;
position: relative;
`

const GoogleBtn = styled.a`
height: fit-content;
width: fit-content;
cursor: pointer;
background-color: #EFEFEF;
padding: 4px 8px;
border-radius: 4px;
color: #2E2E2E;
box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05);
font-weight: bold;
`

const Welcome = styled.span`
text-align:center;
color: #DD4B39;
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