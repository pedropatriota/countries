import { useQuery } from 'react-query';
import { getCountries } from './queryFetcher';

const filterPropsFromCountries = (
  data: any[],
  filters: { name: string; region: string }
): any => {
  const formatNumber = (number: number) =>
    new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(
      number
    );
  const newData = data.map(({ name, capital, region, population, flags }) => {
    return {
      name: name.official,
      capital: capital?.[0],
      region,
      population: formatNumber(population),
      flag: { svg: flags.svg, alt: flags.alt }
    };
  });
  return newData?.filter(
    (item: any) =>
      item?.name.toLowerCase()?.includes(filters?.name?.toLowerCase()) &&
      item?.region.toLowerCase()?.includes(filters?.region?.toLowerCase() ?? '')
  );
};

export const useCountries = (filters: { name: string; region: string }) => {
  const fallback: any[] = [];
  const { data = fallback, ...rest } = useQuery(
    ['countries'],
    () => getCountries(),
    {      
      select: (data) => filterPropsFromCountries(data, filters)
    }
  );

  return {
    countries: data,
    ...rest
  };
};

//https://restcountries.com/v3.1/region/{region}
