import { Container } from "react-bootstrap";
import MyFooter from "./components/MyFooter/MyFooter";
import MyNavbar from "./components/Navbar/MyNavbar";


function MyLayout({children, user}) {
    return ( 
        <Container fluid>
            <MyNavbar user={user}/>
            {children}
            <MyFooter/>
        </Container>
     );
}

export default MyLayout;