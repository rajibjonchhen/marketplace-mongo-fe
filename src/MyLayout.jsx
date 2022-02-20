import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import MyFooter from "./components/MyFooter/MyFooter";
import MyNavbar from "./components/Navbar/MyNavbar";


function MyLayout({children, user, fetchUser, setMyCart, myCart}) {

    const params = useParams()
    const [bgColor, setBgColor] = useState()

    useEffect(() => {
        let id = params.id
        id? setBgColor('rgb(252,199,119)') : setBgColor('rgb(152,099,019)')
    
    }, [])
    return ( 
        <Container  className='fluid w-100 m-0 p-0' fluid="true" style={{backgroundColor:{bgColor}}} >
            {user && <MyNavbar user={user} fetchUser={fetchUser} setMyCart={setMyCart} myCart={myCart} />}
            {children}
            <MyFooter/>
        </Container>
     );
}

export default MyLayout;