import { Container } from './styles';
import ListItem from '../ListItem';

interface IListProps {
  data: {
    id:string;
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
      {data?.map(({id, name, population, region, capital, flag }) => (
        <ListItem
          key={id}
          id={id}
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
