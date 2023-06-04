import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import { light, dark } from './styles/themes';
import { Header, Input, Dropdown } from './components';
import { SingleValue } from 'react-select';

function App() {
  const [theme, setTheme] = React.useState(light);
  const [inputValue, setInputValue] = React.useState('');
  const [filter, setFilter] = React.useState<SingleValue<{
    label: string;
    value: string;
  }> >({label: '', value: ''});

  const options = [
    { label: 'Africa', value: 'africa' },
    { label: 'Asia', value: 'asia' }
  ];

  const toggleTheme = React.useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFilter = (newValue: SingleValue<{
    label: string;
    value: string;
  }>) => {
    setFilter(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header title={theme.title} toggleTheme={toggleTheme} />
      <Input value={inputValue} handleChange={handleChange} />
      <Dropdown filter={filter} options={options} handleFilter={handleFilter} />
    </ThemeProvider>
  );
}

export default App;
