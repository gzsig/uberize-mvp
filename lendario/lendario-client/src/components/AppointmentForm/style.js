import styled from 'styled-components';

const saveOrCancel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a:hover{
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Min = styled.span`
font-size:10px
`

export { saveOrCancel, Min };
