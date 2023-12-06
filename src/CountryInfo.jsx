import React, { useState } from "react";

function CountryInfo({ countryData }) {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <p>Name: {countryData.name.common}</p>
          <p>Official name: {countryData.name.official}</p>
          <p>Capital: {countryData.capital}</p>
          <p>Population: {countryData.population}</p>
        </div>
      </div>
    </>
  );
}

export default CountryInfo;

// onClick={closeModal}
