import {
  Button,
  ContainerContentList,
  Container,
  ContainerButton,
  ContainerContent,
  ContainerList,
  ContainerTitle,
  ContainerBorder,
  ContainerBorderList
} from './styles';
import { ArrowLeft } from '@styled-icons/fluentui-system-regular/ArrowLeft';
import { useNavigate } from 'react-router-dom';

interface ICountryDescription {
  name: string;
  nativeName: string;
  capital: string;
  population: number;
  flag: {
    svg: string;
    alt: string;
  };
  borders: string[];
  tld: string;
  region: string;
  subregion: string;
  currencies: string[];
  languages: string[];
}

const CountryDescription = ({
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
}: ICountryDescription) => {
  const navigate = useNavigate();

  return (
    <Container>
      <ContainerButton>
        <Button onClick={() => navigate(-1)}>
          <ArrowLeft />
          <span>Back</span>
        </Button>
      </ContainerButton>

      <ContainerContent>
        <img src={flag?.svg} alt={flag?.alt} />

        <ContainerList>
          <ContainerTitle>{name}</ContainerTitle>

          <ContainerContentList>
            <span>
              <strong>Native Name: </strong>
              {nativeName}
            </span>
            <span>
              <strong>Population: </strong>
              {population}
            </span>
            <span>
              <strong>Region: </strong>
              {region}
            </span>
            <span>
              <strong>Sub Region: </strong>
              {subregion}
            </span>
            <span>
              <strong>Capital: </strong>
              {capital}
            </span>
            <span>
              <strong>Top Level Domain: </strong>
              {tld}
            </span>
            <span>
              <strong>Currencies: </strong>
              {currencies?.map((c) => c)}
            </span>
            <span>
              <strong>Languages: </strong>
              {languages}
            </span>
          </ContainerContentList>

          <ContainerBorder>
            <span>
              <strong>Border: </strong>
              {borders?.map((b) => (
                <ContainerBorderList key={b}>{b}</ContainerBorderList>
              ))}
            </span>
          </ContainerBorder>
        </ContainerList>
      </ContainerContent>
    </Container>
  );
};

export default CountryDescription;
