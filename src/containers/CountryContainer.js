import { useState, useEffect } from 'react';
import CountryComponent from '../components/CountryComponent';

const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    return(
        <CountryComponent/>
    )

}



export default CountryContainer;
