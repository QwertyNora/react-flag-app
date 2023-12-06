import React, { useEffect, useState } from "react";
import Country from "./Country";

function Continent({ continent }) {
  let [chosenCont, setChosenCont] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${continent}`
        );
        const data = await response.json();
        setChosenCont(data);
      } catch (error) {
        console.log("Could not fetch data: " + error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h6>Chosen continent: {continent}</h6>
      <div className="container">
        {chosenCont &&
          chosenCont.map((country) => {
            return <Country countryData={country} />;
          })}
      </div>
    </>
  );
}

export default Continent;
