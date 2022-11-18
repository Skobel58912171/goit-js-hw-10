import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const searchInput = document.querySelector('#search-box');
console.log(searchInput);
// function fetchCountries(name) {
//   const name = 'Canada';
//   const options = {
//     headers: {
//       authorization: '',
//     },
//   };
// const url = https://restcountries.com/v3.1/name/{name};
// fetch(url)
//   .then(response => {
//     return response.json();
//   })
//   .then(name => console.log(name))
//   .catch(error => {
//     console.log(error);
//   });
// }
fetch('https://restcountries.com/v3.1/name/peru')
  .then(response => {
    return response.json();
  })
  .then(name => console.log(name))
  .catch(error => {
    console.log(error);
  });
