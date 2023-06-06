import styled from 'styled-components';

export const Container = styled.div`  
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 0 5rem;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 12.5rem;
`;

export const Button = styled.button`
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.el};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 2.5rem;
  width: 8.75rem;
  border: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-weight: 600;

  svg {
    width: 1rem;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap:2rem;
  flex-wrap:wrap;

  img {
    width: min(75vw, 35rem);
  }
`;

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 6.25rem;
  width: 100%;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem
`;

export const ContainerContentList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  column-gap: 8rem;

  @media(max-width:700px){
    grid-template-columns: 1fr ;
  grid-template-rows: repeat(8, 1fr);
  }

  span + span {
    margin-bottom: 1.5rem;
  }
`;

export const ContainerBorder = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;  
  display: flex;
  align-items: center;   
`;

export const ContainerBorderList = styled.span`
  padding: 0.625rem 1.25rem;
  border-radius: 3px;
  border: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.el};
  color: ${({ theme }) => theme.colors.text};
  margin-left: 0.5rem;
`;
