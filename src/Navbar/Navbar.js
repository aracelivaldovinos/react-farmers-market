import  { Navbar, Nav, Container} from 'react-bootstrap';


const NavBar = () => {
  return ( 
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Farmers Market</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#produce">Produce</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
   );
}
 
export default NavBar;