import { Button, Card, Col } from 'react-bootstrap';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Country = (props) => {

    const { name, capital, flag, numericCode } = props.country;

    const history = useHistory();
    const handleDetails = (name) => {
        const url = `/country/${name}`;
        history.push(url);
    }

    return (
        <Card>
            <Card.Img style={{height: '200px'}} className="img-fluid" rounded variant="top" src={flag} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  Capital : {capital}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button onClick={() => handleDetails(name)} className="btn btn-success"> Details </Button>
            </Card.Footer>
        </Card>
    );
};

export default Country;