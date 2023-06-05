import { Container } from './styles';

interface IListItemProps {
  name: string;
  capital: string;
  region: string;
  population: number;
  flag: {
    svg: string;
    alt: string;
  };
}

const ListItem = ({ flag, name, population, region, capital }: IListItemProps) => (
  <Container key={name} onClick={()=>{}}>
    <img src={flag.svg} alt={flag.alt} />
    <div>
      <h4>{name}</h4>
      <span>
        <strong>Population:</strong> {population}
      </span>
      <span>
        <strong>Region:</strong> {region}
      </span>
      <span>
        <strong>Capital:</strong> {capital}
      </span>
    </div>
  </Container>
);

export default ListItem;
