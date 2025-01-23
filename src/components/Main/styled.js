import styled from 'styled-components';

export const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: auto;
  
  overflow-y: scroll;
  scrollbar-width: none;
  scroll-snap-type: y mandatory;
`;