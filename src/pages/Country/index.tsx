import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/globalStyles';
import { Header, CountryDescription } from '../../components';
import useHelper from '../useHelper';

const Country = () => {
  const { isLoading, theme, toggleTheme, country } = useHelper();

  const {
    name,
    nativeName,
    capital,
    population,
    flag,
    borders,
    tld,
    region,
    subregion,
    currencies,
    languages
  } = country as any;

  if (isLoading) return null;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header title={theme.title} toggleTheme={toggleTheme} />
      <CountryDescription
        name={name}
        flag={flag}
        nativeName={nativeName}
        capital={capital}
        population={population}
        borders={borders}
        tld={tld}
        region={region}
        subregion={subregion}
        currencies={currencies}
        languages={languages}
      />
    </ThemeProvider>
  );
};

export default Country;
