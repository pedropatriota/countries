import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/globalStyles';
import { Header, Filter, List } from '../../components';
import useHelper from '../useHelper';

function App() {
  const {
    countries,
    isLoading,
    theme,
    inputValue,
    select,
    options,
    toggleTheme,
    handleChange,
    handleSelect
  } = useHelper();

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
