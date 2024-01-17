const stringQuery = window.location.search;
const urlParams = new URLSearchParams(queryString);
const a = urlParams.get('name');

console.log(a);