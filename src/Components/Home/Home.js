import React, { useEffect, useState } from 'react';
import { CardColumns, CardGroup, Container, Row } from 'react-bootstrap';
import Country from '../Country/Country';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])
    
    //console.log(countries);

    return (
        <Container>
            <h2 className="display-4 p-2 text-info text-center" > <strong> Countries </strong></h2>
            <CardColumns>
            {
                countries.map(country =>  <Country key={country.numericCode} country={country}></Country>)
            }
            </CardColumns>
        </Container>
            
            
    );
};

export default Home;