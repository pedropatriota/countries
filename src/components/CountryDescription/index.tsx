import {
  Button,
  ContainerContentList,
  Container,
  ContainerButton,
  ContainerContent,
  ContainerList,
  ContainerTitle
} from './styles';
import { ArrowLeft } from '@styled-icons/fluentui-system-regular/ArrowLeft';

interface ICountryDescription {
  name: string;
  nativeName: string;
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
  currencies: string[];
  languages: string[]
}

const CountryDescription = ({
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
}: ICountryDescription) => {
  return (
    <Container>
      <ContainerButton>
        <Button>
          <ArrowLeft />
          <span>Back</span>
        </Button>
      </ContainerButton>

      <ContainerContent>
        <img src={flag?.svg} alt={flag?.alt} />
        
        <ContainerList>          
          <ContainerTitle>{name}</ContainerTitle>
          
          <ContainerContentList>
            <span><strong>Native Name: </strong>{nativeName}</span>
            <span><strong>Population: </strong>{population}</span>
            <span><strong>Region: </strong>{region}</span>
            <span><strong>Sub Region: </strong>{subregion}</span>
            <span><strong>Capital: </strong>{capital}</span>
            <span><strong>Top Level Domain: </strong>{tld}</span>
            <span><strong>Currencies: </strong>{currencies?.map(c=> c)}</span>
            <span><strong>Languages: </strong>{languages}</span>
          </ContainerContentList>
          <div>border</div>
        </ContainerList>
      </ContainerContent>
    </Container>
  );
};

export default CountryDescription;
