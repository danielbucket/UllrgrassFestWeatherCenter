import styled from 'styled-components';

export const TVStyle = styled.div`
  border-radius: 4rem;
  box-shadow: 0ch 0ch 2ch 0ch rgb(177, 246, 255);
  background-color: ghostwhite;

  && div:first-child {
    box-shadow: inset 0ch 0ch 2ch 0ch var(--lalala);
    border-radius: 2rem;
    width: 100%;
  }
`
