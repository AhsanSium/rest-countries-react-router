import React, { useEffect, useState } from 'react';
import { Card, Container, Jumbotron } from 'react-bootstrap';
import { useParams } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

const CountryDetails = () => {

    const { countryName } = useParams();
    console.log(countryName);

    const [country, setCountry] = useState({});
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
            .then(res => res.json())
            .then(data => setCountry(data));
    }, [countryName])

    const name = country[0]?.name;
    const flag = country[0]?.flag;
    const capital = country[0]?.capital;
    const population = country[0]?.population;
    const region = country[0]?.region;
    const area = country[0]?.area;
    const timezones = country[0]?.timezones;
    
    const styles = {
        header: {
          backgroundImage: `url(${flag})`,
          height: '100vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        },
      
        content: {
            color: 'lightcyan',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }
      }


    return (

        <Jumbotron fluid>
            
            <Container>
                <Card className="bg-light text-white">
                    <Card.Img src={flag} alt="Card image" />
                    <Card.ImgOverlay>
                        
                        <Card.Text style={styles.content} className="d-inline-block rounded p-3 ">
                        <Card.Title>{name}</Card.Title>
                            <p>Population: {capital}</p>
                            <p>Population: {population}</p>
                            <p>Region: {region}</p>
                            <p>Area: {area}</p>
                            <p>Timezone: {timezones}</p>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                {/* <Image rounded fluid src={flag} alt=""></Image>
                <h3> {name}</h3>
                <h5>Capital: {capital}</h5>
               
                <p>Timezone: {timezones}</p> */}
            </Container>
            {/* <div style={styles.header}>
                <div style={styles.content}>
                    Portfolio
                </div>
            </div> */}
        </Jumbotron>

    );
};

export default CountryDetails;