import Countries from "./Countries";

const CountryList = ({countries}) => {

    const countryComponents = countries.map((country, id) => 
        <Countries country={country} key={id}/>
    )    

    return(
        <>
        {countryComponents}
        </>
    )
}

export default CountryList;