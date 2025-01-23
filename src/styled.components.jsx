import styled from 'styled-components';

const OuterShell = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #1a1a1a;
  margin: 3rem;

  border-radius: 4rem;
  box-shadow: 0ch 0ch 5ch 0ch rgb(177, 246, 255);
  background-color: ghostwhite;
`;

const InnerShell = styled.div`
  box-shadow: inset 0ch 0ch 2ch 0ch #1a1a1a;
  border-radius: 2rem;
  width: 100%;
  padding: 1.25rem;
`;


export function TVStyle({children, ...props}) {
  return (
    <OuterShell>
      <InnerShell {...props}>
        {children}
      </InnerShell>
    </OuterShell>
  );
};