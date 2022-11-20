const BASE_URL = 'https://restcountries.com/v3.1/name/';
const APY_KEY = 'fields=name,capital,population,flags,languages';
function fetchCountries(name = 'ukraine') {
  console.log(name);
  return fetch(`${BASE_URL}${name}?${APY_KEY}`)
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
      return console.error(error);
    });
}
export default fetchCountries;
