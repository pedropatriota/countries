import { Container } from './styles';
import ListItem from '../ListItem';

interface IListProps {
  data: {
    name: string;
    capital: string;
    region: string;
    population: number;
    flag: {
      svg: string;
      alt: string;
    };
  }[];
}

const List = ({ data }: IListProps) => {
  return (
    <Container>
      {data?.map(({ name, population, region, capital, flag }) => (
        <ListItem
          key={name}
          name={name}
          population={population}
          region={region}
          capital={capital}
          flag={flag}
        />
      ))}
    </Container>
  );
};

export default List;
