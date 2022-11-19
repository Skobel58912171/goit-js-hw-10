import './css/styles.css';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const BASE_URL = 'https://restcountries.com/v3.1/name/';
const APY_KEY = 'fields=name,capital,population,flags,languages';
const searchInput = document.querySelector('#search-box');
const countryInfo = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');
console.log(countryInfo);
console.log(searchInput);
searchInput.addEventListener('input', onSearch);

function onSearch(e) {
  console.dir(e.currentTarget);
  const searchQuery = e.currentTarget.value;
  console.log(searchQuery);
  fetchCountries(searchQuery).then(data => creatMarkupBox(data));
}

function creatMarkupBox(arr) {
  const markup = arr
    .map(
      ({ name, capital, population, flags, languages }) => `<img src="${
        flags.svg
      }" alt=""><h1>${name.official}</h1 >
      <p><span>Capital:</span>${capital}</p>
      <p><span>Population:</span>${population}</p>
      <p><span>Languages:</span>${Object.values(languages)}</p>`
    )
    .join();
  countryInfo.innerHTML = markup;
}

// function creatMarkupList(arr) {
//   const markup = arr
//     .map(
//       ({ flags, name }) => `<li><img src="${flags.svg}" alt="">,'${name}</li>`
//     )
//     .join();
//   countryInfo.innerHTML = markup;
// }

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
    .catch(error => console.error(error));
}
