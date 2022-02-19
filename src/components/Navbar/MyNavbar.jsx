import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import brand from '../../assets/highpoint.png'
import {BsCart4} from 'react-icons/bs'
import './Navbar.css'
import { Link } from "react-router-dom";

function MyNavbar({user}) {
    return ( 
<Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor:"rgb(53,1,12)",position:'sticky', top:'0', zIndex:'10'}}>
  <Container>
  <Link to={`/home/${user._id}`}>
  <Navbar.Brand href="#home" ><img style={{width:'150px',padding:'0', margin:"0"}} src={brand} alt="brand image"/></Navbar.Brand>
  </Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className='d-flex flex-column'>
    <Nav className="ml-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#cart" className='text-white'><BsCart4/></Nav.Link>
        
      <NavDropdown  title={<div style={{backgroundColor:'grey',borderRadius:"50px",width:'200px', padding:'3px 0'}}><span>{user.name}</span><img style={{width:'20px', border:'1px solid white', borderRadius:'50%',marginLeft:'4px'}}src={user.avatar || "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1024px-User_font_awesome.svg.png?20160212005950"} alt='user image'/></div>} id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Edit Profile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    {/* <Nav className="ml-auto">
      
          <label htmlFor=""></label>
          <input/>
          <label htmlFor=""></label>
          <input/>
            <select placeholder="Category">
                <option>Category</option>
                <option>Ladies</option>
                <option>Gents</option>
                <option>Kids</option>
                <option>Summer</option>
                <option>Winter</option>
            </select>

    </Nav> */}
  </Navbar.Collapse>
  </Container>
</Navbar>
       );
}

export default MyNavbar;