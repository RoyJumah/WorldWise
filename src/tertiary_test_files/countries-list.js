export default function filterCountries(countries, searchTerm) {
  return countries.filter(
    (country) => country.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1,
  );
}
