import React from 'react';
import Logo from '../Logo';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { StyledNavbar } from './styled';
import LinkHome from '../Links/Home';
import LinkCurso from '../Links/Curso';
import LinkEditais from '../Links/Editais';
import LinkDocentes from '../Links/Docentes';
import LinkContatos from '../Links/Contatos';

export default function Header() {
  return (
    <StyledNavbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <Logo />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
              <LinkHome />
            </Nav.Link>
            <Nav.Link href="/curso">
              <LinkCurso />
            </Nav.Link>
            <Nav.Link href="/docentes">
              <LinkDocentes />
            </Nav.Link>
            <Nav.Link href="/editais">
              <LinkEditais />
            </Nav.Link>
            <Nav.Link href="/contatos">
              <LinkContatos />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}
