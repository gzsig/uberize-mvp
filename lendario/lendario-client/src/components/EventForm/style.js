import styled from 'styled-components';
import * as colors from '../../resources/colors'

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

export { FormCard };
