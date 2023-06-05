import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import { light, dark } from './styles/themes';
import { Header, Filter, List } from './components';
import { useCountries } from './service/queryHook';
import { SingleValue } from 'react-select';

function App() {
  const [filters, setFilters] = React.useState<{
    name: string;
    region: string;
  }>({ name: '', region: '' });

  const { countries, isLoading } = useCountries(filters);

  const [theme, setTheme] = React.useState(light);
  const [inputValue, setInputValue] = React.useState('');
  const [select, setSelect] = React.useState<
    SingleValue<{ label: string; value: string }>
  >({
    label: '',
    value: ''
  });
  const [_, startTransition] = React.useTransition();

  const options = React.useMemo(
    () => [
      { label: 'Africa', value: 'Africa' },
      { label: 'Americas', value: 'Americas' },
      { label: 'Antarctic', value: 'Antarctic' },
      { label: 'Asia', value: 'Asia' },
      { label: 'Europe', value: 'Europe' },
      { label: 'Oceania', value: 'Oceania' }
    ],
    []
  );

  const toggleTheme = React.useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    startTransition(() => setFilters({ ...filters, name: event.target.value }));
  };

  const handleSelect = (
    newValue: SingleValue<{ label: string; value: string }> | any
  ) => {
    setSelect(newValue);
    startTransition(() =>
      setFilters({ ...filters, region: newValue?.value as string })
    );
  };

  if (isLoading) return null;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header title={theme.title} toggleTheme={toggleTheme} />
      <Filter
        filter={select}
        handleChange={handleChange}
        handleFilter={handleSelect}
        value={inputValue}
        options={options}
      />
      <List data={countries} />
    </ThemeProvider>
  );
}

export default App;
