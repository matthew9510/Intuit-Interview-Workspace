import React, {useState, useEffect, SyntheticEvent, useCallback } from "react";

const randomNumberURL = "http://www.randomnumberapi.com/api/v1.0/random?min=0&max=1000&count=1";

const RandomNumber: React.FC = () => {
    let [randomNumber, setRandomNumber] = useState<number[]|undefined>();
    let [error, setError] = useState(false)
    let [errorMessage, setErrorMessage] = useState("")

    const fetchRandomNumber = useCallback(async ()=>{
        setError(false)
        setErrorMessage('')
        try{
            console.error('fetch', fetch)
            const res = await fetch(randomNumberURL)
            console.error('res', res )
            if(!res.ok){
               throw new Error("Couldn't get new number")
            }
            const randomNum = await res.json()
            setRandomNumber(randomNum)
            console.log("randomNum:", randomNum)
        }
        catch (err: any){
            setError(true)
            setErrorMessage(err.message)
        }      
        // await fetch(randomNumberURL).then((res)=> res.json().then((randomNumberArray: number [])=>{
        //     setRandomNumber(randomNumberArray)
        //         console.log("randomNum:", randomNumberArray)
        // })).catch((error)=>{
        //     setError(true)
        //     setErrorMessage(error.message)
        // })
    }, [])

    useEffect(()=>{
        fetchRandomNumber()
    }, [fetchRandomNumber])

    const newNumberClickHandler = (event: SyntheticEvent)=>{
        event.preventDefault();
        fetchRandomNumber()
    }

    return (
        <div>
            <hr></hr>
            {error && <p>{errorMessage}</p> }
            {!error && randomNumber && <p>Here is a random Number for you: {randomNumber}</p>}
            <button onClick={newNumberClickHandler}>Click for a new random number</button>
        </div>
    )
}

export default RandomNumber;