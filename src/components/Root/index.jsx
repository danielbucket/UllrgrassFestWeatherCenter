import styled from 'styled-components';
import Header from '../Header';
import Main from '../Main';

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0.25rem;
`;

export default function Root() {
  return (
    <RootContainer>
      <Header />
      <Main />
    </RootContainer>
  );
};