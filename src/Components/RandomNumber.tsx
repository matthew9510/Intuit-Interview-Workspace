import React, { useState, useEffect, SyntheticEvent, useCallback } from "react";
//
// const randomNumberURL =
//   "http://www.randomnumberapi.com/api/v1.0/random?min=0&max=1000&count=1";
const randomFactUrl= "https://api.api-ninjas.com/v1/facts?limit=1"

const RandomNumber: React.FC = () => {
  let [randomNumber, setRandomNumber] = useState<string[] | undefined>();
  let [error, setError] = useState(false);
  let [errorMessage, setErrorMessage] = useState("");

  const fetchRandomNumber = useCallback(async () => {
    setError(false);
    setErrorMessage("");
    try {
      const res = await fetch(randomFactUrl);
      if (!res.ok) {
        throw new Error("Unable to get new number from API at this time");
      }
      const randomNum = await res.json();
      setRandomNumber(randomNum);
    } catch (err: any) {
      setError(true);
      setErrorMessage(err.message);
    }

    return () => {
      setError(false);
      setRandomNumber(undefined);
      setErrorMessage("");
    };
  }, []);

  useEffect(() => {
    fetchRandomNumber();
  }, [fetchRandomNumber]);

  const newNumberClickHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    fetchRandomNumber();
  };

  return (
    <div>
      <hr></hr>
      {error && <p>{errorMessage}</p>}
      {!error && randomNumber && (
        <p>Here is a random Number for you: {randomNumber}</p>
      )}
      <button onClick={newNumberClickHandler}>
        Click for a new random number
      </button>
    </div>
  );
};

export default RandomNumber;
