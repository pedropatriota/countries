import React from 'react'
import {useParams} from 'react-router-dom'
import { useCountries, useCountryById } from './../service/queryHook';
import { light, dark } from './../styles/themes';
import { SingleValue } from 'react-select';

const useHelper = ()=>{
  const {id}=useParams<{id:string}>()

  const [filters, setFilters] = React.useState<{
    name: string;
    region: string;
  }>({ name: '', region: '' });

  const { countries, isLoading } = useCountries(filters);
  const{country} = useCountryById(id as string)

  const [theme, setTheme] = React.useState(light);
  const [inputValue, setInputValue] = React.useState('');
  const [select, setSelect] = React.useState<
    SingleValue<{ label: string; value: string }>
  >({
    label: '',
    value: ''
  });
  const [_, startTransition] = React.useTransition();

  const options = React.useMemo(
    () => [
      { label: 'Africa', value: 'Africa' },
      { label: 'Americas', value: 'Americas' },
      { label: 'Antarctic', value: 'Antarctic' },
      { label: 'Asia', value: 'Asia' },
      { label: 'Europe', value: 'Europe' },
      { label: 'Oceania', value: 'Oceania' }
    ],
    []
  );

  const toggleTheme = React.useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    startTransition(() => setFilters({ ...filters, name: event.target.value }));
  };

  const handleSelect = (
    newValue: SingleValue<{ label: string; value: string }> | any
  ) => {
    setSelect(newValue);
    startTransition(() =>
      setFilters({ ...filters, region: newValue?.value as string })
    );
  };
  return{
    filters,
    countries,
    isLoading,
    theme,
    inputValue,
    select,
    options,
    toggleTheme,
    handleChange,
    handleSelect,
    country
  }
}

export default useHelper