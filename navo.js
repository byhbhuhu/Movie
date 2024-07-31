import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Nave= ()=> {
    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">DOMA</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">movies</Nav.Link>
                        <Nav.Link href="#pricing">series</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
}
export default Nave;