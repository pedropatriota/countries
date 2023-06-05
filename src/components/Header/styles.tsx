import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.el};
  border-bottom: ${({ theme }) => theme.colors.border};
  padding: 0 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 1rem;
    }
    button {
      padding: 0;
      border: 0;
      background: none;
      box-shadow: none;
      color: ${({ theme }) => theme.colors.text};
      font-weight: 600;
      cursor: pointer;
    }
  }

  span {
    font-size: 1.5rem;
    font-weight: 800;
  }
`;
