import { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';
import VisitedCountryList from '../components/VisitedCountryList';

const CountryContainer = () => {
    
    // state to list all countries & visited countries from API
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    // fetch countries data from countries API
    const loadCountriesData = async () => {
        const response = await fetch ("https://restcountries.com/v3.1/all");
        const data = await response.json(); // parse response to json
        setCountries(data); // set fetched data to the state
        console.log(data);
    };

    // useEffect to load countries to the components
    useEffect(() => {
        loadCountriesData();
    }, []);

    // function to mark country as visited - attempted with if statement before but changed the function type
    const markCountryAsVisited = (countryVisited) => {
        // creates copy of original array & adds visited country to the array when marked as visited
        const updateVisitedCountries = [...visitedCountries]
        updateVisitedCountries.push(countryVisited);

        // Remove the visited country from the not visited list
        const updatedCountriesList = countries.filter ((country) => country !== countryVisited)

        setVisitedCountries(updateVisitedCountries); // updates state of empty visitedCountries array
        setCountries(updatedCountriesList);
    }

    console.log(countries);

    return(
        // returns list of countries as a list to the user
        <>
        <CountryList countries={countries} markCountryAsVisited={markCountryAsVisited}/>
        <VisitedCountryList visitedCountries={visitedCountries}/>
        </>
    );
}

export default CountryContainer;
