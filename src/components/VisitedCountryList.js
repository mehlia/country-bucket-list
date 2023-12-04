import Countries from "./Countries";

//  function to display list of visited countries
const VisitedCountryList = ({visitedCountries}) => {
    // .map function to display visitedCountries array
    const visitedCountryComponents = visitedCountries.map((country, id) => 
        <Countries country={country} key={country.id}/>
    )

    return(
        <>
            <h2>Countries Visited:</h2>
            {visitedCountryComponents}
        </>
    )
}

export default VisitedCountryList;