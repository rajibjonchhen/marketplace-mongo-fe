import { Button, Card, Col } from "react-bootstrap";
import productImg from '../../assets/highpoint-sm.jpeg'
import {MdRateReview} from 'react-icons/md'
import {BsCart4} from 'react-icons/bs'


function ProductCard({product}) {
    return (  
        <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.imageUrl || productImg} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {product.description}
                    <span className='pointer text-primary'>Read more</span>
                <MdRateReview/>
                </Card.Text>
                <button className='btn btn-sm btn-success'>Add to cart <BsCart4/></button>
            </Card.Body>
        </Card>
    </Col>
    );
}

export default ProductCard;