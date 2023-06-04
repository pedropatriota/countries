import ReactSelect, { GroupBase, SingleValue } from 'react-select';
import { Container } from './styles';
type Filter = SingleValue<{ label: string; value: string }>;

interface IDropdownProps {
  options: readonly (
    | { label: string; value: string }
    | GroupBase<{ label: string; value: string }>
  )[];
  filter: Filter;
  handleFilter: (newValue: SingleValue<Filter>) => void;
}

const Dropdown = ({ options, handleFilter, filter }: IDropdownProps) => {
  return (
    <Container>
      <ReactSelect onChange={handleFilter} value={filter} options={options} />
    </Container>
  );
};

export default Dropdown;
