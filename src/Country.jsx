import React, { useState } from "react";
import CountryInfo from "./CountryInfo";
import Modal from "./Modal";

function Country({ countryData }) {
  console.log(countryData);
  let [showInfo, setSowInfo] = useState(null);

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
      {showInfo && <Modal countryData={countryData} />}
    </>
  );
}

export default Country;
