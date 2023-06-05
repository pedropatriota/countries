import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body{
  font-family:'Nunito Sans', sans-serif;
  font-size:16px;
  --webkit-font-smoothing: antialiased;  
  background-color: ${({theme})=> theme.colors.bg};
  color: ${({theme})=> theme.colors.text};
}
`