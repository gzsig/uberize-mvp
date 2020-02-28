import styled from 'styled-components';
import * as colors from '../../resources/colors';

const Frame = styled.div`
  min-width: 400px;
  width: 75%;
  border: 1px solid ${colors.primary};
  box-shadow: 2px 2px 2px #eee;
  margin: auto;
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  background-color: {colors.offWhite};
`;

const Button = styled.div`
  cursor: pointer;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Day = styled.div`
  width: 14.28%;
  display: flex;
  flex-direction: column;
  ${'' /* justify-content: center; */}
  align-items: center;
  color: ${colors.secondary};
  height: 70px;
`;

const DayHead = styled.div`
  width: 14.28%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.secondary};
  margin-bottom: 6px;
border-bottom: solid 1px ${colors.primary};
`;

const Event = styled.div`
  width: 100%;
  text-align: center;
  color: ${colors.primary};
  font-size: 12px;
`;

export { Button, Body, Day, DayHead, Frame, Header, Event };
