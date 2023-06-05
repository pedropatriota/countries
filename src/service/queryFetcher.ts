type TFetcher = (url: string, method?: string, body?: any) => Promise<any>;

const fetcher: TFetcher = async (url, method = 'GET', body) => {
  const payload = {
    method,
    body: body && JSON.stringify(body)
  };

  const response = await fetch(url, { ...payload });
  const data = await response.json();

  return data;
};



export function getCountries() {
  return fetcher('https://restcountries.com/v3.1/all');
}

export function getCountryById(code: string) {
  return fetcher(`https://restcountries.com/v3.1/alpha/${code}`);
}
