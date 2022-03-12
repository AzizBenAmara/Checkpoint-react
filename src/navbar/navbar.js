import react from "react";
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import "./navbar.css"

const NavBar =()=> {
    return (<div>
        <Navbar className="navv" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Aziz Ben Amara</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Accueil</Nav.Link>
                <Nav.Link href="#link">Mes vidéos</Nav.Link>
                <NavDropdown title="Mes sections" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Section 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Section 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Section 3</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Curriculum Vitae</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>)

}

export default NavBar