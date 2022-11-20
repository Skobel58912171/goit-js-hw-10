import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';

import fetchCountries from './fetchcountries';

const DEBOUNCE_DELAY = 300;
const refs = {
  searchInput: document.querySelector('#search-box'),
  countryInfo: document.querySelector('.country-info'),
  countryList: document.querySelector('.country-list'),
};

refs.searchInput.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));
function onSearch(e) {
  const searchQuery = e.target.value.trim();
  // console.log(searchQuery);
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
  fetchCountries(searchQuery).then(data => {
    if (!data) {
      return;
    }
    controlLength(data);
  });
}
function controlLength(arrCountries) {
  //   console.log(arrCountries.length);
  if (arrCountries.length > 10) {
    return Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
  if (arrCountries.length > 1 && arrCountries.length < 11) {
    return creatMarkupList(arrCountries);
  } else {
    creatMarkupBox(arrCountries);
  }
}

function creatMarkupList(arr) {
  const markup = arr
    .map(
      ({ name, flags }) => `<li class="country-item"><img
        class="country-flag" src="${flags.svg}" alt="${name}"/>
      <p class="country-list-title">${name.official}</p></li>`
    )
    .join();
  refs.countryList.innerHTML = markup;
}

function creatMarkupBox(arr) {
  const markup = arr
    .map(
      ({
        name,
        capital,
        population,
        flags,
        languages,
      }) => `<div class="country-info-card"><img
        class="country-flag" src="${flags.svg}" alt="${name}"/>
      <h1 class="country-title">${name.official}</h1></div>
      <p class="country-info-text">
        <span class="country-info-value">Capital: </span>${capital}
      </p>
      <p class="country-info-text"><span class="country-info-value">Population: </span>${population}</p>
      <p class="country-info-text"><span class="country-info-value">Languages: </span>${Object.values(
        languages
      )}</p>`
    )
    .join();
  refs.countryInfo.innerHTML = markup;
}
