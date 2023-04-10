import React, { useEffect, useState } from "react";
import CountryInfo from "./CountryInfo";
import {
  CountryListWrapper,
  StyledCountryList,
  StyledCountryListItem,
} from "./Styled";

export default function CountryList() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  let listElements: any[] = [];

  countries.forEach((country: any, index) => {
    listElements.push(
      <StyledCountryListItem key={index}>
        <p>
          {country.name.official} {country.flag}
        </p>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Captial: {country.capital}</p>
        <button onClick={() => setSelectedCountry(country)}>
          View More About Country
        </button>
      </StyledCountryListItem>
    );
  });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <CountryListWrapper>
      <StyledCountryList>{listElements}</StyledCountryList>
      {selectedCountry && (
        <CountryInfo country={selectedCountry} setSelectedCountry={setSelectedCountry} />
      )}
    </CountryListWrapper>
  );
}
