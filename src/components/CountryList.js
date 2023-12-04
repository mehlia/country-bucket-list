import Countries from "./Countries";

const CountryList = ({countries}) => {

    const countryComponents = countries.map((country, id) => 
        <Countries country={country} key={country.id}/>
    )    

    return(
        <>
        <h2>Countries I want to Visit:</h2>
        {countryComponents}
        </>
    )
}

export default CountryList;