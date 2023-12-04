const Countries = ({country, markCountryAsVisited}) => {

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