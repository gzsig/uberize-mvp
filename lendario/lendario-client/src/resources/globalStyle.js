import styled from 'styled-components';
import * as colors from './colors';

const Wrapper = styled.div`
  width: 100vw;
  min-height: calc(100vh - 68px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Frame = styled.div`
  min-width: 400px;
  min-height: calc(100vh - 68px);
  width: 74%;
  box-shadow: 2px 2px 2px #eee;
  margin: auto;
`;

export { Frame, Wrapper };
