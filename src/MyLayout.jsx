import { Container } from "react-bootstrap";
import MyFooter from "./components/MyFooter/MyFooter";
import MyNavbar from "./components/Navbar/MyNavbar";


function MyLayout({children}) {
    return ( 
        <Container fluid>
            <MyNavbar/>
            {children}
            <MyFooter/>
        </Container>
     );
}

export default MyLayout;