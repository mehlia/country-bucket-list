import { useState, useEffect } from 'react';
import CountryComponent from '../components/CountryComponent';

const CountryContainer = () => {

    const [countries, setCountries] = useState(null);
    const [visitedCountries, setVisitedCountries] = useState(null);

    const loadCountriesData = async () => {
        const response = await fetch ("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data); 
        console.log(data);
    };

    useEffect(() => {
        loadCountriesData();
    }, []);

    console.log(countries);

    return(
        <>
        
        </>
    )
}

export default CountryContainer;
