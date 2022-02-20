import { Col, Container, Row } from "react-bootstrap";

function MyFooter() {
    return ( 
    <Container fluid className='mt-4 border-top py-3' style={{backgroundColor:'rgb(53,1,13)', position:'fixed', bottom:'0', fontSize:'12px'}}>
       <Container>
        <Row>
            <Col>
                <ul className='list-unstyled text-white text-left'>
                    <li>Home</li>
                    <li>Get to Know Us</li>
                    <li>Press Releases</li>
                    <li>About us</li>
                    <li>Blog</li>
                </ul>
            </Col>
            <Col>
            <ul className='list-unstyled text-white text-left'>
                    <li>Collaboration</li>
                    <li>Sell on High Point</li>
                    <li>Become a retailer </li>
                    <li>Careers</li>
                    <li>Intership</li>
                    <li></li>
                </ul>
            </Col>
            <Col>
                
            </Col>
        </Row>
       </Container>
    </Container> );
}

export default MyFooter;