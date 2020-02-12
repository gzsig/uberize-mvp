import styled from 'styled-components';
import * as colors from '../../resources/colors'

const OnboardCard = styled.div `
-webkit-tap-highlight-color: transparent;
${'' /* display: flex;
flex-direction: column;
justify-content: space-evenly; 
align-items: center; */}
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

const Filed = styled.input `
all: unset;
transition: all 1s ease;
border-bottom: 1px solid ${colors.primary};
&:focus {
  background-color: #d2d2d2;
  border-bottom: 1px solid black;
}
`

export {Filed, OnboardCard}