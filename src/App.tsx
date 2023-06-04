import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles'
import { light, dark } from './styles/themes';
import { Header, Input} from './components';

function App() {
  const [theme, setTheme] = React.useState(light);
  const [inputValue, setInputValue] = React.useState('');

  const toggleTheme = React.useCallback(() => {   
    setTheme(theme.title === 'light' ? dark : light);
  },[theme]);

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>)=>{
    setInputValue(event.target.value)
  },[inputValue]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header title={theme.title} toggleTheme={toggleTheme} />
      <Input value={inputValue} handleChange={handleChange}/>
    </ThemeProvider>
  );
}

export default App;
