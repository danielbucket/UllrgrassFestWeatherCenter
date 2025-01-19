import styled from 'styled-components';

export const TVStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  color: var(--lalala);
  margin: 3rem;
  
  scroll-snap-align: start;
  scroll-margin-top: 4rem;
  scroll-snap-stop: always;

  border-radius: 4rem;
  box-shadow: 0ch 0ch 5ch 0ch var(--iced-blue);
  background-color: ghostwhite;

  && #inner-tv {
    box-shadow: inset 0ch 0ch 2ch 0ch var(--lalala);
    border-radius: 2rem;
    width: 100%;
    padding: 1.25rem;
  }
`
