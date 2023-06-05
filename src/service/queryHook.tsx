import { useQuery } from 'react-query';
import { getCountries, getCountryById } from './queryFetcher';
import { EnvelopeAt } from 'styled-icons/bootstrap';

const formatNumber = (number: number) =>
  new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(
    number
  );

const filterPropsFromCountries = (
  data: any[],
  filters: { name: string; region: string }
): any => {
  const newData = data.map(
    ({ cca2, name, capital, region, population, flags }) => {
      return {
        id: cca2,
        name: name.common,
        capital: capital?.[0],
        region,
        population: formatNumber(population),
        flag: { svg: flags.svg, alt: flags.alt }
      };
    }
  );
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

const formattedDataByCountry = (data: any[]) => {  
  const newData = data?.map(
    ({
      cca2,
      name,      
      population,
      capital,
      border,
      currencies,
      region,
      subregion,
      languages,
      flags,
      tld
    }) => {
      const firstLanguage = Object.keys(languages)?.[0];      
      const formattedCurrencies= Object.entries(currencies).map(([_,value])=>{
        return (value as {name:string})?.name 
    })

      return {
        id: cca2,
        name: name.common,
        nativeName: name?.nativeName?.[firstLanguage]?.common,
        capital: capital?.[0],
        population: formatNumber(population),
        flag: { svg: flags.svg, alt: flags.alt },
        border,
        tld: tld?.[0],
        region,
        subregion,
        currencies: formattedCurrencies,
        languages: Object.values(languages)?.join(', '),
      };
    }
  );
  return newData?.[0]
};

export const useCountryById = (code: string) => {
  const fallback: any[] = [];
  const { data = fallback, ...rest } = useQuery(
    ['country'],
    () => getCountryById(code),
    {
      select:(data)=> formattedDataByCountry(data),
      enabled: Boolean(code),
    }
  );

  return {
    country: data,
    ...rest
  };
};
