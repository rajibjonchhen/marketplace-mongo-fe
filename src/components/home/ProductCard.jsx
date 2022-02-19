import { Button, Card, Col } from "react-bootstrap";
import productImg from '../../assets/highpoint-sm.jpeg'

function ProductCard({product}) {
    return (  
        <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.imageUrl || productImg} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    </Col>
    );
}

export default ProductCard;