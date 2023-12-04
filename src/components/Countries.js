const Countries = ({country, markCountryAsVisited}) => {

    // button function to mark each country as visited, button next to each country
    const onButtonClick = () => {
        markCountryAsVisited(country)
    };

    return(
        <>
            <p>{country.name.common}</p>
            <button onClick={onButtonClick}>Mark as Visited</button>
        </>
    )
}

export default Countries;