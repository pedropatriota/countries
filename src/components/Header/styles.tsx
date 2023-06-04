import styled from 'styled-components'

export const Container = styled.nav`
  width: 100%;
  height: 5rem;
  background-color: ${({theme})=> theme.colors.bg};
  box-shadow: 0px 2px 20px 1px rgba(136,136,136,1);
  padding: 0 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span{
    font-size: 1.5rem;
    font-weight: 800;
  }

  button{
    padding: 0;
    border: 0;
    background: none;
    box-shadow: none;
    color: ${({theme})=> theme.colors.text}
  }
`