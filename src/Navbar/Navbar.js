import './Navbar.css'

const Navbar = () => {
  return ( 
    <div className="navbar">
      <ul>
        <li><a className="active"href="#Home">Home</a></li>
        <li><a href="#Product">Produce</a></li>
      </ul>
    </div>  
   );
}
 
export default Navbar;