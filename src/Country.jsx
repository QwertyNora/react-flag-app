import React, { useState } from "react";
import CountryInfo from "./CountryInfo";

function Country({ countryData }) {
  console.log(countryData);
  let [showInfo, setSowInfo] = useState(false);

  const handleClick = () => {
    setSowInfo(!showInfo);
  };

  return (
    <>
      <div className="country-container"></div>
      <img
        src={countryData.flags.svg}
        onClick={handleClick}
        alt=""
        height="100"
      />
      {showInfo && <CountryInfo countryData={countryData} />}
    </>
  );
}

export default Country;
