import React from 'react';
import { Navbar, Nav, Form, FormControl,Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => {

    const handleSearch = () => {
        const text = document.getElementById('search').innerHTML;
        const url = `/country/${text}`;
        <Link to={url}></Link>
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">Rest <Badge pill variant="primary">
                Countries</Badge> 
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl id="search" type="text" placeholder="Country" className="mr-sm-2" />
                    <Button onClick={handleSearch} id="search-btn" variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            
        </>
    );
};

export default Menu;