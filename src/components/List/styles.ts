import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16.25rem, 1fr));
  gap: 4.75rem;
  padding: 3.125rem min(5vw, 5rem);
`;
