import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';  // Importando NavDropdown
import { Link } from 'react-router-dom'; // Importando Link do React Router
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainNavbar.scss'; // Estilos gerais para as barras de navegação

function MainNavbar() {
  return (
    <Navbar className="main-navbar" variant="dark" expand="lg">
      <Container>
        {/* Navbar.Brand à esquerda */}
        <Navbar.Brand as={Link} to="/">UTILIZA</Navbar.Brand>

        {/* Navbar Toggle para dispositivos móveis */}
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          {/* Menu de navegação com Dropdown */}
          <Nav className="ml-auto">
            {/* Criando um dropdown no lugar de Nav.Link */}
            <NavDropdown title="Todos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/assistencia24h">Assistência 24h</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/comunicado">Comunicado</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/recebiveis">Recebíveis</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Menu de Login à direita */}
          <Nav>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
