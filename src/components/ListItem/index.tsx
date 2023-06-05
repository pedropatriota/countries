import { Container } from './styles';
import { useNavigate } from 'react-router-dom';

interface IListItemProps {
  id: string;
  name: string;
  capital: string;
  region: string;
  population: number;
  flag: {
    svg: string;
    alt: string;
  };
}

const ListItem = ({
  id,
  flag,
  name,
  population,
  region,
  capital
}: IListItemProps) => {

  const navigate = useNavigate()

  return (
    <Container onClick={() => navigate(`/${id}`)}>
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
};

export default ListItem;
