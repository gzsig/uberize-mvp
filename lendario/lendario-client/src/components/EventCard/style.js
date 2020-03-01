import styled from 'styled-components';
import * as colors from '../../resources/colors';

const EventCard = styled.div`
  background-color: ${colors.beige};
  height: 150px;
  width: 200px;
  border-radius: 4px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05);
  padding: 6px;
  margin: 12px;
  position: relative;
`;

const EventCardTitle = styled.div`
  font-size: 16px;
  color: ${colors.primary};
  margin: 0 0 8px 0;
`;

const EventCardBody = styled.div`
  font-size: 12px;
  color: ${colors.primary};
`;

const EventCardLabel = styled.span`
  color: ${colors.secondary};
  font-weight: bold;
`;

const EventCardInfo = styled.span`
  color: ${colors.primary};
`;

const EventCardLine = styled.div`
  margin-bottom: 2px;
`;

const EventCardFooter = styled.div`
  position: absolute;
  bottom: 2px;
`;

export {
  EventCard,
  EventCardTitle,
  EventCardBody,
  EventCardLabel,
  EventCardInfo,
  EventCardLine,
  EventCardFooter
};
