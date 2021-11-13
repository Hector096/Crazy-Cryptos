import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './App.css';

export default function Header() {
  return (
    <Navbar expand="lg">
      <Container className="p-3">
        <NavLink to="/" className="h2 text-decoration-none text-dark me-5 fw-bold d-flex">
          Crazy Cryptos
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-lg-auto m-2 my-lg-0"
            navbarScroll
          >
            <NavLink exact to="/" className="h5 me-4 text-dark text-decoration-none" activeClassName="text-light">Home</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
