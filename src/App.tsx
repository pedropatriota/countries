import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles'
import { light, dark } from './styles/themes';
import { Header } from './components';

function App() {
  const [theme, setTheme] = React.useState(light);

  const toggleTheme = React.useCallback(() => {   
    setTheme(theme.title === 'light' ? dark : light);
  },[theme, setTheme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
