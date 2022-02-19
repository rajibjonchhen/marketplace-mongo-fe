import { Container } from "react-bootstrap";
import MyFooter from "./components/MyFooter/MyFooter";
import MyNavbar from "./components/Navbar/MyNavbar";


function MyLayout({children, user, bgColor}) {
    return ( 
        <Container  className='fluid w-100 m-0 p-0' fluid="true" style={{backgroundColor:{bgColor}}} >
            {user && <MyNavbar user={user}/>}
            {children}
            <MyFooter/>
        </Container>
     );
}

export default MyLayout;