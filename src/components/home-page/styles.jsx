import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 60px;
  left: 20%;
  padding: 20px 20px;
  max-width: 60%;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({pos}) => pos > 0 && '24px'};
  align-items: center;
  text-align: left;
`;
