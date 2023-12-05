import React from "react";

function CountryInfo({ countryData }) {
  return (
    <>
      <div className="modal">
        <p>Name: {countryData.name.common}</p>
        <p>Official name: {countryData.name.official}</p>
        <p>Capital: {countryData.capital}</p>
        <p>Population: {countryData.population}</p>
      </div>
    </>
  );
}

export default CountryInfo;
