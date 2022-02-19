import { Container, Nav, Navbar } from "react-bootstrap";

function MyNavbar({user}) {
    return ( 
        <Navbar bg="dark" variant="dark" fluid>
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#user">{user.name}</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
       );
}

export default MyNavbar;