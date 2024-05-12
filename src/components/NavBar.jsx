import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap"
import eelogo from '../assets/eelogo.png'
import { Link } from "react-router-dom"
import { NavDropdown } from "react-bootstrap"
export default function NavBar() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Nav.Link as={Link} to="/">
                <img
                    src={eelogo}
                    width="100vh"
                    alt="Logo"
                />
        </Nav.Link>
        <NavbarBrand >Eldemir Hukuk Burosu</NavbarBrand>
        &nbsp;
        &nbsp;
        &nbsp;
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/" className="me-4">Anasayfa</Nav.Link>
                <Nav.Link as={Link} to="ekibimiz/" className="me-4">Ekibimiz</Nav.Link>
                    <NavDropdown title="Calisma Alanlarimiz" id="basic-nav-dropdown" className="me-4">
                    <NavDropdown.Item as={Link} to={"cezahukuku/"}>Ceza Hukuku</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"ticarethukuku/"}>Ticaret Hukuku</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"ishukuku/"} >Is Hukuku</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to={"tumu/"} >Tum Alanlar</NavDropdown.Item>
                    </NavDropdown>
                <Nav.Link as={Link} to="iletisim/" className="me-4">Iletisim</Nav.Link>
                <Nav.Link as={Link} to="Konumumuz/" className="me-4" >Konum</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </>

  ) 
}
