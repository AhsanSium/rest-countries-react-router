import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl,Button, Badge, InputGroup, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Menu = () => {

    let text = '';
    const getValue = event => {
        text = event.target.value;
        console.log(text);
    }

    const history = useHistory();
    const handleSearch = () => {
        
        const url = `/country/${text}`;
        history.push(url);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/home">Rest <Badge pill variant="primary">
                Countries</Badge></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                    <Form>
                    <InputGroup className="mb-3" >
                        <FormControl onChange={getValue} placeholder="Search Country"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        />
                        <Button onClick={handleSearch} className="btn btn-success"> Search </Button>
                    </InputGroup>    
                    </Form>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* <Navbar bg="dark" variant="dark">
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
            </Navbar> */}
            
        </>
    );
};

export default Menu;