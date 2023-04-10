import React, { Dispatch, SetStateAction } from "react";

interface IProps {
  country: any;
  setSelectedCountry: Dispatch<SetStateAction<{}>>;
}

const CountryInfo: React.FC<IProps> = () => {
  return <div>CountryInfo</div>;
};

export default CountryInfo;
