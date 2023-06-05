import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/globalStyles';
import { Header, CountryDescription } from '../../components';
import useHelper from '../useHelper';

interface ICountry {
  name: string;
    nativeName:string;
    capital: string;
    population: number;
    flag: {
      svg: string;
      alt: string;
    };
    border: string[];
    tld: string;
    region: string;
    subregion: string;
    currencies: string[]
}

const Country = () => {
  const { isLoading, theme, toggleTheme, country } = useHelper();

  const {
    name,
    nativeName,
    capital,
    population,
    flag,
    border,
    tld,
    region,
    subregion,
    currencies,
    languages
  } = country;

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
        border={border}
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
