import { Link } from 'react-router-dom';
import  { Navbar, Nav, Container} from 'react-bootstrap';


const NavBar = () => {
  return ( 
    <Container>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">Farmers Market</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link className="nav-links">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/produce">Produce</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
   );
}
 
export default NavBar;