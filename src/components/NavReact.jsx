import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavReact() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Productos">
              Productos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Perfil">
              Perfil
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Login">
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Register">
              Registro
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Admin">
              Subir productos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
