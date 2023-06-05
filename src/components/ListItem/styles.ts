import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 16.25rem;
  cursor: pointer;

  img {
    width: 100%;
    height: 9.8rem;
    object-fit: cover;
  }
  div {
    background-color: ${({ theme }) => theme.colors.el};
    padding: 2rem 1.25rem;
    height: 11rem;
    border: ${(props) => props.theme.colors.border};
    display: flex;
    flex-direction: column;

    h4 {
      margin-bottom: 1.25rem;
    }
  }
`;
