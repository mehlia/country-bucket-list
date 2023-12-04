import { useState, useEffect } from 'react';
import Countries from '../components/Countries';
import CountryList from '../components/CountryList';

const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
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
        <CountryList countries={countries}/>
        </>
    )
}

export default CountryContainer;
