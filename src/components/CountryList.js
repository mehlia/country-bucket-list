import Countries from "./Countries";

// displays the list of countries
const CountryList = ({countries, markCountryAsVisited}) => {

    // uses .map function to create the array of countries from API
    const countryComponents = countries.map((country, id) => 
        // creates component for each country in array
        <Countries country={country} key={country.id} markCountryAsVisited={markCountryAsVisited}/>
    )    

    return(
        <>
        <h2>Countries I want to Visit:</h2>
        {countryComponents}
        </>
    )
}

export default CountryList;