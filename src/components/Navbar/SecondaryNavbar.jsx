import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './SecondaryNavbar.scss'; // Importando o arquivo de estilo

function SecondaryNavbar() {
  return (
    <Navbar className="secondary-navbar" variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Assistência 24h</Navbar.Brand> {/* Ajustado para Link do React Router */}
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="MENU"
              menuVariant="dark"
            >
              {/* As opções do menu suspenso que levam às páginas internas */}
              <NavDropdown.Item as={Link} to="/assistencia24h/aprovel">Aprovel</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/assistencia24h/moto-club">MotoClub</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/assistencia24h/nova-protecao">Nova Proteção</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/assistencia24h/solidy">Solidy</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SecondaryNavbar;
