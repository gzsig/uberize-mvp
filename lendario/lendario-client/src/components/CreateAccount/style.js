import styled from 'styled-components';
import * as colors from '../../resources/colors'

const OnboardCard = styled.div`
color: ${colors.secondary};
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

const Filed = styled.input`
all: unset;
transition: all 1s ease;
border-bottom: 1px solid ${colors.primary};
width: 120px;
&:focus {
  caret-color: ${colors.primary};
  border-bottom: 1px solid ${colors.secondary};
}
`
const Label = styled.label`
color: ${colors.secondary};
width: 100px;
text-transform: uppercase;
display:inline-block;
// text-align: right;
margin: 0 14px 0 0;
`

const Button = styled.a`
color: ${colors.secondary};
cursor: pointer;
font-size:16px;
line-height: 32px;
margin: 2px 0;
max-width: 150px; 
text-decoration: none;
text-transform: uppercase;
letter-spacing: 0;
transition: all 280ms ease-in-out;
width: 100%; 
text-align: center;
  &:hover { 
    margin: 0;
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-color:  ${colors.secondary};
    text-decoration: none; 
    letter-spacing: 5px;
  }
`

const Name = styled.span`
  color: ${colors.primary};
  font-size: 20px;
  font-weight: bold;
`


export { Button, Label, Filed, OnboardCard, Name }