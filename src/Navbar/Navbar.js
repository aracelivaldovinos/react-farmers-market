import { Link } from 'react-router-dom';
import  { Navbar, Nav} from 'react-bootstrap';
import './Navbar.css';


const NavBar = () => {
  return ( 
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand className="navbar-brand">
          <Link to="/" className="navbar-brand-links">
            <h2>Avery's</h2> 
            <h1>Organics</h1>
          </Link>
        </Navbar.Brand>
        <Nav>
          <Nav.Link>
            <Link to="/" className="nav-links">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/produce" className="nav-links">Produce</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
   );
}
 
export default NavBar;