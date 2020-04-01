import styled from 'styled-components';
import * as colors from '../../resources/colors';

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  color: ${colors.primary};
  background-color: ${colors.beige};
`;

const Button = styled.div`
  cursor: pointer;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: ${colors.beige};
`;

const Day = styled.div`
  width: 14.28%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.secondary};
  height: 80px;
  overflow-x: hidden;
  overflow-y: scroll;
  margin: 4px 0;
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
  white-space: nowrap;
  padding: 0 4px;
  margin: 1px 0;
  // text-overflow: ellipsis; 
  // overflow-x: hidden; 
`;

export { Button, Body, Day, DayHead, Header, Event };
