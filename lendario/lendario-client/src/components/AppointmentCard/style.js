import styled from 'styled-components';
import * as colors from '../../resources/colors';

const AppointmentCard = styled.div`
  background-color: ${colors.beige};
  height: 150px;
  width: 200px;
  border-radius: 4px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05);
  padding: 6px;
  margin: 12px;
  position: relative;
`;

const AppointmentCardTitle = styled.div`
  font-size: 16px;
  color: ${colors.primary};
  margin: 0 0 8px 0;
`;

const AppointmentCardBody = styled.div`
  font-size: 12px;
  color: ${colors.primary};
`;

const AppointmentCardLabel = styled.span`
  color: ${colors.secondary};
  font-weight: bold;
`;

const AppointmentCardInfo = styled.span`
  color: ${colors.primary};
`;

const AppointmentCardLine = styled.div`
  margin-bottom: 2px;
`;

const AppointmentCardFooter = styled.div`
  position: absolute;
  bottom: 2px;
`;

export {
  AppointmentCard,
  AppointmentCardTitle,
  AppointmentCardBody,
  AppointmentCardLabel,
  AppointmentCardInfo,
  AppointmentCardLine,
  AppointmentCardFooter
};
