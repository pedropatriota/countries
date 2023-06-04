import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles'
import { light, dark } from './styles/themes';
import { Header } from './components';

function App() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle/>
      <Header theme={theme === 'light' ? 'dark' : 'light'} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
