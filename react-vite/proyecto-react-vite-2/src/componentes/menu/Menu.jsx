import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//CSS
import './Menu.css'

const Menu = () => {

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        
          <Navbar.Brand href="/">Planeta Terror</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
              <Link to="/" className="linkMenu">Home</Link>
              <Link to="/pociones" className="linkMenu">Pociones</Link>
              <Link to="/peliculas" className="linkMenu">Peliculas</Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        
      </Navbar>




/* <nav>
    <ul>
        <li> <Link to="/"> Inicio </Link></li>
        <li> <Link to="/pociones"> Pociones </Link></li>
        <li> <Link to="/casas"> Casas </Link></li>

    </ul>
</nav> */
    )
}




export default Menu;