import styled from 'styled-components';
import * as colors from './colors';

const BeigeCard = styled.div`
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
  background-color: ${colors.beige};
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05);
  position: relative;
`;

const Frame = styled.div`
  min-width: 400px;
  min-height: calc(100vh - 68px);
  width: 74%;
  box-shadow: 2px 2px 2px #eee;
  margin: auto;
`;

const FiledS = styled.input`
  all: unset;
  transition: all 1s ease;
  border-bottom: 1px solid ${colors.primary};
  width: 120px;
  &:focus {
    caret-color: ${colors.primary};
    border-bottom: 1px solid ${colors.secondary};
  }
`;
const FiledM = styled.input`
  all: unset;
  transition: all 1s ease;
  border-bottom: 1px solid ${colors.primary};
  width: 170px;
  &:focus {
    caret-color: ${colors.primary};
    border-bottom: 1px solid ${colors.secondary};
  }
`;
const FiledL = styled.input`
  all: unset;
  transition: all 1s ease;
  border-bottom: 1px solid ${colors.primary};
  width: 220px;
  &:focus {
    caret-color: ${colors.primary};
    border-bottom: 1px solid ${colors.secondary};
  }
`;
const Label = styled.label`
  color: ${colors.secondary};
  width: 100px;
  text-transform: uppercase;
  display: inline-block;
  text-align: right;
  margin: 0 14px 0 0;
`;

const Wrapper = styled.div`
  width: 100vw;
  min-height: calc(100vh - 68px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.a`
  color: ${colors.secondary};
  cursor: pointer;
  font-size: 16px;
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
    border-color: ${colors.secondary};
    text-decoration: none;
    letter-spacing: 5px;
  }
`;

const Events = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const FormCard = styled.div`
  color: ${colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 450px;
  padding: 0 25px;
  border: 0;
  height: 550px;
  border-radius: 4px;
  background-color: ${colors.beige};
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05);
  position: relative;
`;

export {
  BeigeCard,
  Button,
  FiledS,
  FiledM,
  FiledL,
  Label,
  Frame,
  Wrapper,
  Events,
  FormCard
};
