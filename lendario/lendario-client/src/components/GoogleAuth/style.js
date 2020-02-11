import styled from 'styled-components';

const LoginCard = styled.div `
-webkit-tap-highlight-color: transparent;
display: flex;
justify-content: center;
align-items: centerl;
width: 300px;
margin: 50px auto;
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
`

const GoogleBtn = styled.a`
height: fit-content;
margin: auto;
cursor: pointer;
`

const SvgIcon = styled.span`
vertical-align: middle;
fill: rgba(0, 0, 0, 0.54);
padding-right: 4px;
height: 37px;
display: inline-block;
`

export {GoogleBtn, LoginCard, SvgIcon}